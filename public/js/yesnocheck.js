function yesnoCheck() {
  bcm_jss = document.getElementById("bcm_jss");
  bcm_jss1 = document.getElementById("bcm_jss1");
  bcm_jss2 = document.getElementById("bcm_jss2");
  bcm_jss3 = document.getElementById("bcm_jss3");

  if (document.getElementById("bcm_jss").checked) {
    document.getElementById("bcm_jss_copies").style.display = "block";
  } else if (document.getElementById("bcm_jss1").checked) {
    document.getElementById("bcm_jss1_copies").style.display = "block";
  } else if (document.getElementById("bcm_jss2").checked) {
    document.getElementById("bcm_jss2_copies").style.display = "block";
  } else if (document.getElementById("bcm_jss3").checked) {
    document.getElementById("bcm_jss3_copies").style.display = "block";
  }
}

function yesnoCheck() {}
