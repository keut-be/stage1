import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
   

	return (
		<div className='lmj-categories'>
            Categories <button>{/*<ion-icon name="list"></ion-icon>*/}</button>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''></option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button  className='bt-1' onClick={() => setActiveCategory('')}><ion-icon name="refresh-circle"></ion-icon></button>
		</div>
	)
}

export default Categories;