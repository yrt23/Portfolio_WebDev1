//document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

const text =[
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget turpis nec sem efficitur tempus. Vivamus viverra arcu vitae augue tristique blandit. Mauris ullamcorper tincidunt odio eget venenatis. Etiam id auctor sem. Nunc sodales felis a purus porttitor fermentum. Praesent a sapien ut sapien fermentum rutrum. In bibendum, sapien non finibus placerat, quam metus ultricies dolor, ac vestibulum quam velit et enim. Vestibulum consectetur quam orci, non consectetur odio tempus vel. Quisque et turpis in nibh sagittis consectetur eget vel lorem. In pellentesque augue neque, a aliquet elit suscipit non. Phasellus eu neque id libero facilisis scelerisque eu porta felis.`,
  `Quisque eget felis ac mauris convallis vulputate. Proin vitae nibh quam. Cras et ultrices erat. Vivamus felis libero, aliquam sit amet ullamcorper sit amet, ullamcorper id turpis. Nullam tincidunt tellus eu risus porttitor, a tempus urna auctor. Sed massa orci, finibus dictum bibendum in, dictum vitae tellus. Ut pulvinar pulvinar aliquam. Nullam quis tellus enim.`,
   `Maecenas dignissim quis neque at ullamcorper. Nam ligula massa, accumsan sed consequat sit amet, fermentum hendrerit felis. Etiam quis convallis odio. Aenean arcu leo, lacinia nec luctus ac, sollicitudin varius felis. Etiam mollis tempor pharetra. Morbi vitae odio quam. Aenean pretium ex eu tempor ullamcorper. Integer id diam nibh. Cras vulputate velit a neque pellentesque suscipit.`,
  `Sed mattis purus non velit egestas fringilla. Aenean pharetra volutpat leo et ullamcorper. Donec varius massa enim, eget vulputate nisl congue ut. Aliquam non fermentum turpis. Aliquam porttitor accumsan lacus eu lacinia. Duis vehicula justo nunc, quis malesuada lectus tristique in. Vestibulum eget imperdiet velit. Cras imperdiet ac dui in pharetra. Pellentesque sed lectus ante. Donec lacinia nisl eget neque dictum, vitae tincidunt odio porttitor. Duis aliquet, purus vel convallis varius, diam tortor posuere augue, luctus scelerisque tellus tellus vel elit.`,
   `Praesent at urna vestibulum, ultricies mi et, tempor justo. Fusce sed sem viverra, dapibus augue lacinia, ornare diam. Suspendisse potenti. Cras odio elit, hendrerit vitae ante sed, pretium laoreet nisl. Sed sit amet feugiat purus. Cras nec facilisis diam, sit amet consectetur nisi. Pellentesque sit amet dolor in nisl ullamcorper tempus.`,
  `Integer efficitur cursus ante sit amet molestie. Quisque vitae nisi mattis, ultrices nulla rhoncus, tempus risus. Phasellus commodo, purus ut vulputate elementum, est nulla faucibus ex, porttitor bibendum est nisl non nunc. Integer placerat cursus dictum. Etiam sollicitudin erat vel augue dignissim sollicitudin. Curabitur pulvinar feugiat sem vitae porta. Nam in pharetra mi. Curabitur vel mattis nisi. Aliquam auctor nunc sit amet neque condimentum, nec scelerisque justo ultricies.`,
   `Fusce iaculis turpis ultrices ligula ultricies, ac tincidunt orci venenatis. Praesent volutpat felis eu orci luctus sollicitudin porttitor in arcu. Proin facilisis mauris in cursus tincidunt. Nulla convallis, diam id condimentum pellentesque, turpis est posuere dolor, at viverra libero erat ac quam. Suspendisse potenti. Aliquam tincidunt dui id hendrerit pretium. Cras mattis justo sit amet tellus sodales ultrices.`,
  `Aliquam et leo dui. Vivamus porta odio turpis, at malesuada dolor volutpat nec. Quisque pretium eros sit amet libero fermentum aliquam. Duis pellentesque eu neque vitae vestibulum. Phasellus lacus nisi, vestibulum ut nulla sit amet, sollicitudin condimentum eros. Etiam accumsan tellus vitae venenatis imperdiet. Fusce hendrerit diam sit amet convallis mollis. Maecenas odio quam, ullamcorper sit amet orci sed, accumsan facilisis sem. Vivamus aliquam laoreet justo.`,
  `Ut sed porttitor quam. Nam suscipit tempus sem. Fusce vehicula quam in urna auctor, quis mollis neque posuere. Morbi egestas molestie arcu, a semper ligula luctus quis. Sed lacinia, neque ut euismod porttitor, erat tellus rhoncus leo, id euismod felis est at urna. Maecenas consectetur lectus ut quam molestie faucibus. Curabitur id commodo enim, eget venenatis justo.`,
  `Etiam ullamcorper fermentum tortor iaculis vestibulum. Ut interdum lacus euismod varius scelerisque. Nunc porta lorem arcu, quis placerat metus tempor a. Sed commodo ornare finibus. Vestibulum pharetra viverra dictum. Proin luctus enim ante, sed maximus mi mollis quis. Nullam ultricies nec ligula non congue. Vestibulum fermentum est auctor tellus semper accumsan. Donec ac velit mauris. Suspendisse sodales semper lorem, eget fringilla ante fermentum feugiat. Aliquam sed dolor erat.`]


// ===============  Start of the generator codes ============================
// ------------------------------------------------------------------
// This is to make sure that the slider and the key button is in sync
// ------------------------------------------------------------------

// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
const form = document.querySelector(".lorem-form");
const result = document.querySelector(".lorem-text");

// The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
const numofpara = document.getElementById("numofpara");            //slider
const numofparaRange = document.getElementById("numofparaRange");  //numberBOX


// ------------------------------------------------------------------
// This is to make sure that the slider and the key button is in sync
// ------------------------------------------------------------------

function syncParaNumbers(e) {
  const value = e.target.value;
  numofpara.value = value;
  numofparaRange.value = value;
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const value = parseInt(numofpara.value);
  let tempText = text.slice(0, value);
  tempText = tempText.map(item => `<p class="result">${item}</p>`).join("");
  result.innerHTML = tempText;
  // result.myInput = tempText;
})


// "myInput"

numofpara.addEventListener('input', syncParaNumbers)
numofparaRange.addEventListener('input', syncParaNumbers)


// ===============================
// Creating a copy button function
// <input type="text" value="" id="myInput">
// ===============================

//function myFunction() {
  //// Get the text field
  //var copyText = document.getElementById("myInput");

  //// Select the text field
  //copyText.select();
  //copyText.setSelectionRange(0, 99999); // For mobile devices

   //// Copy the text inside the text field
  //navigator.clipboard.writeText(copyText.value);

  //// Alert the copied text
  //alert("Copied the text: " + copyText.value);
//}

// Sample text box

// Dealing with Input width
//let el = document.querySelector(".input_test");
//let widthMachine = document.querySelector(".input-wrap .width-machine");
//el.addEventListener("keyup", () => {
//  widthMachine.innerHTML = el.value;});

