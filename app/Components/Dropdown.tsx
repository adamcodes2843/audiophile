import CategoryDropdown from './CategoryDropdown'
const Dropdown = ({setShowCategories}:any) => {
  return (
    <div className="fixed z-50 w-full mt-24 lg:hidden h-full bg-audiocolor-b2 bg-opacity-30 overflow-hidden">
        <CategoryDropdown setShowCategories={setShowCategories}/>
    </div>
  )
}

export default Dropdown