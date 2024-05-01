export const replaceMongoIdInArray = (array) => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      }
    })
    .map(({ _id, ...rest }) => rest)

  return mappedArray
}

export const replaceMongoIdInObject = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() }
  return updatedObj
}

// find category name in array
export const findUniqueCategoryName = (recipesArray) => {
  const uniqueCategories = new Set()
  recipesArray.forEach((recipe) => {
    uniqueCategories.add(recipe.category)
  })
  const uniqueCategoryName = [...uniqueCategories]
  return uniqueCategoryName
}
