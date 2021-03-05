import $ from 'jquery';
window.$ = $;

export default function Languages() {
  function displayJS () {
      // document.getElementById("code-container").innerHTML='<object type="text/html" data="../sortingAlgorithms/toBeDisplayed/BubbleSortJS.html" ></object>';
      return (
        <div>
        <script>
          $(document).ready( function() {$("#displayJS ").on("click", function() {$("#content").load("../sortingAlgorithms/toBeDisplayed/BubbleSortJS.html");})});
        </script>
        </div>
      )
 }
  
    return (
<div id="code-and-viz-container">
    <div id="code-and-button-container">
      <div className="prog-languages">
        <button onClick={() => displayJS()}>Javascript</button>
        <button >Python3</button>
      </div>
      <div id="code-container"></div>
    </div>
</div>
    );
}
    