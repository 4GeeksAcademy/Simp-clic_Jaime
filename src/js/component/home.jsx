import React, { useEffect, useState } from "react";
import { SimpleCounter } from "./SimpleCounter";





//create your first component
const Home = () => {

	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(true)
	const [isCountdown, setIsCountdown] = useState(false)
	const [alert, setAlert] = useState(0)



	useEffect(()=>{
		if(timer === alert && alert !=0) window.alert("runs out of time")
		
			if(active){
			setTimeout(()=>{
				setTimer(value=> value +1)
			}, 1000)
		}

		if(isCountdown){
			setTimeout(()=>{
				setTimer(value=> value -1)
			}, 1000)
		}
		


	},[timer, active, isCountdown])

	const starStop = () => setActive(value=> !value)

	const resetTimer = () => setTimer(value=> value=0)

	const handleChange = e => setTimer(value=> value = e.target.value)
	

	return (
		<main className="text-center my-5 form-contorl ">
			<h1 className="my-5">Not that simple counter</h1>
			<section className="counter-holder">

				<SimpleCounter number={<span className="fa fa-clock"></span>} />
				<SimpleCounter number={Math.floor(timer/100000)%10}/>
				<SimpleCounter number={Math.floor(timer/10000)%10}/>
				<SimpleCounter number={Math.floor(timer/1000)%10}/>
				<SimpleCounter number={Math.floor(timer/100)%10}/>
				<SimpleCounter number={Math.floor(timer/10)%10}/>

				<SimpleCounter number={Math.floor(timer%10)}/>
			</section>
			<section className="container text-center my-5 form-control" >
				<h2 className="mb-4">Counter controller</h2>
					<div>
						<button disabled={active} onClick={starStop} className="mx-1 btn btn-success">start</button>
						<button disabled={!active} onClick={starStop} className="mx-1 btn btn-light">stop</button>
						<button onClick={resetTimer} className="mx-1 btn btn-dark">reset</button>
					</div>
			</section>
			<section className="container text-center my-5">
					<h2 className="">Countdown</h2>
					<form className="form-control" onSubmit={e=>e.preventDefault()}>
					<label className="form-text">
					<input className="form-control" type="number" value={timer} onChange={e=> handleChange(e)}/>
					</label>
					<div>
						<input disabled={isCountdown}  onClick={()=>setIsCountdown(value => !value)} className="my-2 mx-1 btn btn-warning" type="submit" value={"start"}/>
						<input disabled={!isCountdown} onClick={()=>setIsCountdown(value => !value)} className="my-2 mx-1 btn btn-secondary" type="submit" value={"stop"}/>
					</div>
					</form>
			</section>
			<section className="container text-center my-5">
				<h2>Create alert</h2>
				<form className="form-control" onSubmit={e=>e.preventDefault()}>
					<label className="form-text"> Alert at
						<input 
							className="form-control" 
							type="number" 
							onChange={e => setAlert(value => value=e.target.value)}
						/>
					</label>
					<div>
						<input 
							onClick={()=> window.alert("Alert created")} 
							className="my-2 mx-1 btn btn-danger" 
							type="submit" value={"create"}
						/>
					</div>
				</form>

			</section>
		</main>
	);
};

export default Home;
