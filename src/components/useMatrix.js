/**
 * @desc matrix3d JS
 * used for desktop and mobile
 *
 * @requires targetDiv = target to apply matrix
 * @requires matrix = matrix setup
 * @requires speed = seconds
 */

export function useMatrix(targetDiv, matrix, speed = 1) {
  console.log(targetDiv, Array.isArray(matrix));

  if (!Array.isArray(matrix))
    return console.error(
      "Not valid array provided. Matrix MUST be an array of 16 numbers"
    );

  if (matrix.length !== 16)
    return console.error(
      "Not valid array provided. Matrix MUST be an array of 16 numbers"
    );

  /**
   * @desc matrix start / stop
   */
  let translationMatrixStart = matrix;
  let translationMatrixStop = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

  // Returns a string: "matrix3d(..."
  function matrixArrayToCssMatrix(array) {
    return "matrix3d(" + array.join(",") + ")";
  }

  /**
   * @desc creates strings
   */
  let matrix3dStart = matrixArrayToCssMatrix(translationMatrixStart);
  let matrix3dStop = matrixArrayToCssMatrix(translationMatrixStop);

  /**
   * @desc starts matrix 3d effect
   */
  const addMatrix = () => {
    targetDiv.current.style.transition = `all ${speed} ease 0.1s`;
    targetDiv.current.style.transform = matrix3dStart;
  };

  /**
   * @desc ends matrix 3d effect
   */
  const removeMatrix = () => {
    targetDiv.current.style.transition = `all ${speed} ease 0.1s`;
    targetDiv.current.style.transform = matrix3dStop;
    setTimeout(() => {
      targetDiv.current.style.transition = null;
      targetDiv.current.style.transform = null;
    }, 100);
  };

  /**
   * @desc returns the two functions in an object
   */

  return { addMatrix, removeMatrix };
}
