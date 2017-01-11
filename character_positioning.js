function chrsPosition(str) {
  var chr_stat = {};
  var len = str.length - 1;

  while(len >= 0) {
    let chr = str[len];
    len--;
    if(chr === ' ') { continue }
    chr_stat[chr] ? chr_stat[chr].push(len + 1) : chr_stat[chr] = [len + 1];
  }
  return chr_stat
}

console.log(chrsPosition("lighthouse in the house"));