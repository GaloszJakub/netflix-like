import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

export default function QuestionsSections() {
	const accordionData = [
		{
			id: 1,
			question: 'Lorem ipsum 1',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
		},
		{
			id: 2,
			question: 'Lorem ipsum 2',
			answer:
				'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.',
		},
		{
			id: 3,
			question: 'Lorem ipsum 3',
			answer: 'Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.',
		},
		{
			id: 4,
			question: 'Lorem ipsum 4',
			answer: 'Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.',
		},
		{
			id: 5,
			question: 'Lorem ipsum 5',
			answer: 'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor.',
		},
		{
			id: 6,
			question: 'Lorem ipsum 6',
			answer:
				'Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
		},
	]

	return (
		<div className="bg-black text-white px-6  md:px-20 lg:px-36  pb-6 mx-auto">
			<div className="container mx-auto">
				<div className="px-2 md:px-6">
					<h2 className=" pt-14 text-2xl font-bold mb-4">Często zadawane pytania</h2>
				</div>
				<div className=" md:px-12  ">
					<div>
						{accordionData.map(({ id, question, answer }) => (
							<Accordion
								key={id}
								sx={{
									backgroundColor: '#2D2D2D',
									color: '#fff',
									mb: 1,

									transition: 'all 0.3s ease-in-out',
								}}>
								<AccordionSummary
									aria-controls={`panel${id}-content`}
									id={`panel${id}-header`}
									sx={{
										'&:hover': {
											backgroundColor: '#4f5451',
											cursor: 'pointer',
										},
										'& .MuiTypography-root': {
											fontSize: '1.5rem',
											fontWeight: 'semibold',
										},
									}}>
									<Typography>{question}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography sx={{ fontSize: '1.4rem' }}>{answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
