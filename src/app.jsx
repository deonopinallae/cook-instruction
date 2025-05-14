import { useState } from 'react'
import styles from './app.module.css'
import data from './data.json'

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const steps = [...data]

	const isFirstStep = activeIndex === 0
	const isLastStep = activeIndex === steps.length - 1

	const clickBack = () => {
		setActiveIndex(activeIndex - 1)
	}
	const clickStep = (elId) => {
		setActiveIndex(elId)
	}
	const clickNext = () => {
		isLastStep
			? setActiveIndex(0)
			: setActiveIndex(activeIndex + 1)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex]?.content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) => {
							return (
								<li
									id={index}
									key={id}
									className={
										styles['steps-item'] +
										' ' +
										(activeIndex === index
											? styles.active + ' ' + styles.done
											: activeIndex > index
											? styles.done : '')
									}
								>
									<button
										onClick={() => clickStep(index)}
										className={styles['steps-item-button']}
									>
										{index + 1}
									</button>
									{title}
								</li>
							)
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							onClick={clickBack}
							disabled={isFirstStep}
							className={styles.button}
						>
							Назад
						</button>
						<button
							onClick={clickNext}
							className={styles.button}
						>
							{isLastStep
								? 'Начать сначала'
								: 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
