

// eslint-disable-next-line react/prop-types
function Button({title}) {
  return (
    <div>
      <button className="text-black border-2 border-blue-700 p-2.5 rounded-xl">{title}</button>
    </div>
  )
}

export default Button