let showButton = document.getElementById('show-less-gst-amt');

showButton.addEventListener('click', () => {
  // showing result on display
  document.querySelector('.resultDiv').style.display = 'block';

  // less gst amount
  let gstAmount = document.getElementById('gst-amt').value;
  let gstPer = document.getElementById('gst-per').value;

  let gstPercentCalculate = parseFloat(gstPer) + 100; //parseFloat is used to convert to number from string.
  console.log(gstPercentCalculate);
  let math = (gstAmount * 100) / gstPercentCalculate;
  document.querySelector('#less-gst-amt').innerHTML = Number(math.toFixed(3)); // toFixed is used to limit the decimal points.
  // console.log(math);

  // gst percent
  document.querySelector('#gst-percent').innerHTML = gstPer;

  // gst-amount
  let gst_actual_amount = gstAmount - math;
  document.querySelector('#gst-money').innerHTML = gst_actual_amount;
  // amount including gst
  document.querySelector('#totalamt').innerHTML = gstAmount;

  // calculating quantity
  let product_rate = parseFloat(document.querySelector('#product-rate').value);
  console.log(typeof product_rate);
  console.log(math);

  // calculating product quantity
  let quantity = math / product_rate;
  document.querySelector('#productQty').innerHTML = quantity.toFixed(3); // toFixed is used to limit the decimal points.

  // displaying product rate
  document.querySelector('#prod_rate').innerHTML = product_rate;
});

// decalration of a function for copy to clipboard
function copyToClipboard(element) {
  const text = element.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert('✅ কপি হয়ে গেছে: ' + text);
    })
    .catch((err) => {
      alert('❌ কপি করা যায়নি: ' + err);
    });
}
