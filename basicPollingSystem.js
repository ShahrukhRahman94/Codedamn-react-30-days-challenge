import { useState } from 'react'

export default function App() {
	const [votes, SetVotes] = useState([
		{ id: 1, name: 'option 1', voteCount: 0 },
		{ id: 2, name: 'option 2', voteCount: 0 },
		{ id: 3, name: 'option 3', voteCount: 0 },
		{ id: 4, name: 'option 4', voteCount: 0 }
	])

	const handleOnClick  = (id)=>{
		SetVotes(votes.map(( vote)=>(
			vote.id ===id ? {...vote,voteCount: vote.voteCount+1} : vote
		)))
	}


	return (
		<>
			<h1>helllo </h1>
			<h4 id="question"></h4>
			{votes.map((vote,index)=>(<button className="option" key={index} onClick={()=>handleOnClick(vote.id)}>
				<span>{vote.name}</span><br/>
				<span>{vote.voteCount}</span>
			</button>
			))}
			
		</>
	)
}
