import { useState } from 'react'
import styles from './app.module.css'
import data from './data.json'

export const App = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const steps = [...data]

	const clickNext = () => {
		setActiveIndex(activeIndex + 1)
	}
	const clickBack = () => {
		setActiveIndex(activeIndex - 1)
	}
	const clickStep = (event) => {
		setActiveIndex(Number(event.target.closest('li').id))
		console.log(event.target.closest('li'))
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps.map((el, index) => {
							return activeIndex === index ? el.content : null
						})}
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
										onClick={clickStep}
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
							disabled={activeIndex === 0 ? true : false}
							className={styles.button}
						>
							Назад
						</button>
						<button
							onClick={
								activeIndex === steps.length
									? setActiveIndex(0)
									: clickNext
							}
							className={styles.button}
						>
							{activeIndex === steps.length - 1
								? 'Начать сначала'
								: 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
