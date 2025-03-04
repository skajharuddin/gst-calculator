let showButton = document.getElementById('show-less-gst-amt');

showButton.addEventListener('click', () => {
  // showing result on display
  document.querySelector('.resultDiv').style.display = 'block';
  
  // less gst amount
  let gstAmount = document.getElementById('gst-amt').value;
  let gstPer = document.getElementById('gst-per').value;

  let gstPercentCalculate = (parseFloat(gstPer) + 100); //parseFloat is used to convert to number from string.
  console.log(gstPercentCalculate);
  let math = (gstAmount * 100) / gstPercentCalculate;
  document.querySelector('#less-gst-amt').innerHTML = math;
  
  // gst percent
  document.querySelector('#gst-percent').innerHTML = gstPer;

    // gst-amount
  let gst_actual_amount = gstAmount - math;
  document.querySelector('#gst-money').innerHTML = gst_actual_amount;

  // amount including gst
  document.querySelector('#totalamt').innerHTML = gstAmount;


});
