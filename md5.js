md5 = {
 B: {
  res: [],
  tail: [],
  md5blks: []
 },
 c4: [128, 32768, 8388608, -2147483648],
 c16: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
 cS: [0, 8, 16, 24],

 cmn: function(q, a, b, x, s1, s2, t) {
  a += q + x + t;

  return ((a << s1 | a >>> s2) + b) << 0;
 },
 hash: function(s, enc, arr) {
  var r;

  for(var i = 0;i < 16;i++) {
   md5.B.tail[i] = 0;
  }

  if(enc) {
   r = md5.md51(md5.encode(s));
  }else{
   r = md5.md51(s);
  }

  var tmp = r[0];md5.B.res[1] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[0] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[3] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[2] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[5] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[4] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[7] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[6] = md5.c16[tmp & 15];

  tmp = r[1];md5.B.res[9] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[8] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[11] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[10] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[13] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[12] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[15] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[14] = md5.c16[tmp & 15];

  tmp = r[2];md5.B.res[17] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[16] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[19] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[18] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[21] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[20] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[23] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[22] = md5.c16[tmp & 15];

  tmp = r[3];md5.B.res[25] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[24] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[27] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[26] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[29] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[28] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[31] = md5.c16[tmp & 15];
  tmp >>= 4;md5.B.res[30] = md5.c16[tmp & 15];

  if(arr) {
   return md5.B.res;
  }else{
   return md5.B.res[0] + md5.B.res[1] + md5.B.res[2] + md5.B.res[3] + md5.B.res[4] + md5.B.res[5] + md5.B.res[6] + md5.B.res[7] + md5.B.res[8] + md5.B.res[9] + md5.B.res[10] + md5.B.res[11] + md5.B.res[12] + md5.B.res[13] + md5.B.res[14] + md5.B.res[15] + md5.B.res[16] + md5.B.res[17] + md5.B.res[18] + md5.B.res[19] + md5.B.res[20] + md5.B.res[21] + md5.B.res[22] + md5.B.res[23] + md5.B.res[24] + md5.B.res[25] + md5.B.res[26] + md5.B.res[27] + md5.B.res[28] + md5.B.res[29] + md5.B.res[30] + md5.B.res[31];
  }
 },
 encode: function(s) {
  if(s === null || typeof s === "undefined"){
   return "";
  }

  s = s + "";
  var utf = "", start, end, sLen;
  start = end = 0;

  sLen = s.length;
  for(var i = 0;i < sLen;i++) {
   var c1 = s.charCodeAt(i);
   var enc = null;

   if(c1 < 128) {
    end++;
   }else if(c1 > 127 && c1 < 2048) {
    enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
   }else{
    enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
   }
   if(enc !== null) {
    if(end > start) {
     utf += s.slice(start, end);
    }
    utf += enc;
    start = end = i + 1;
   }
  }

  if(end > start) {
   utf += s.slice(start, sLen);
  }

  return utf;
 },
 md5cycle: function(k) {
  var r = md5.md5_rounds(1732584193, -271733879, -1732584194, 271733878, k, true);

  return [
   (r[0] + 1732584193) << 0,
   (r[1] - 271733879) << 0,
   (r[2] - 1732584194) << 0,
   (r[3] + 271733878) << 0
  ];
 },
 md5cycleAdd: function(x, k) {
  var r = md5.md5_rounds(x[0], x[1], x[2], x[3], k, false);

  return [
   (r[0] + x[0]) << 0,
   (r[1] + x[1]) << 0,
   (r[2] + x[2]) << 0,
   (r[3] + x[3]) << 0
  ];
 },
 md5_rounds: function(a, b, c, d, k, simple) {
  if(simple) {
   a = k[0] - 680876937;
   a = ((a << 7 | a >>> 25) - 271733879) << 0;
   d = k[1] - 117830708 + ((2004318071 & a) ^ -1732584194);
   d = ((d << 12 | d >>> 20) + a) << 0;
   c = k[2] - 1126478375 + (((a ^ -271733879) & d) ^ -271733879);
   c = ((c << 17 | c >>> 15) + d) << 0;
   b = k[3] - 1316259209 + (((d ^ a) & c) ^ a);
   b = ((b << 22 | b >>> 10) + c) << 0;
  }else{
   a = md5.cmn(((c ^ d) & b) ^ d, a, b, k[0], 7, 25, -680876936);
   d = md5.cmn(((b ^ c) & a) ^ c, d, a, k[1], 12, 20, -389564586);
   c = md5.cmn(((a ^ b) & d) ^ b, c, d, k[2], 17, 15, 606105819);
   b = md5.cmn(((d ^ a) & c) ^ a, b, c, k[3], 22, 10, -1044525330);
  }

  a = md5.cmn(((c ^ d) & b) ^ d, a, b, k[4], 7, 25, -176418897);
  d = md5.cmn(((b ^ c) & a) ^ c, d, a, k[5], 12, 20, 1200080426);
  c = md5.cmn(((a ^ b) & d) ^ b, c, d, k[6], 17, 15, -1473231341);
  b = md5.cmn(((d ^ a) & c) ^ a, b, c, k[7], 22, 10, -45705983);
  a = md5.cmn(((c ^ d) & b) ^ d, a, b, k[8], 7, 25, 1770035416);
  d = md5.cmn(((b ^ c) & a) ^ c, d, a, k[9], 12, 20, -1958414417);
  c = md5.cmn(((a ^ b) & d) ^ b, c, d, k[10], 17, 15, -42063);
  b = md5.cmn(((d ^ a) & c) ^ a, b, c, k[11], 22, 10, -1990404162);
  a = md5.cmn(((c ^ d) & b) ^ d, a, b, k[12], 7, 25, 1804603682);
  d = md5.cmn(((b ^ c) & a) ^ c, d, a, k[13], 12, 20, -40341101);
  c = md5.cmn(((a ^ b) & d) ^ b, c, d, k[14], 17, 15, -1502002290);
  b = md5.cmn(((d ^ a) & c) ^ a, b, c, k[15], 22, 10, 1236535329);

  a = md5.cmn(((b ^ c) & d) ^ c, a, b, k[1], 5, 27, -165796510);
  d = md5.cmn(((a ^ b) & c) ^ b, d, a, k[6], 9, 23, -1069501632);
  c = md5.cmn(((d ^ a) & b) ^ a, c, d, k[11], 14, 18, 643717713);
  b = md5.cmn(((c ^ d) & a) ^ d, b, c, k[0], 20, 12, -373897302);
  a = md5.cmn(((b ^ c) & d) ^ c, a, b, k[5], 5, 27, -701558691);
  d = md5.cmn(((a ^ b) & c) ^ b, d, a, k[10], 9, 23, 38016083);
  c = md5.cmn(((d ^ a) & b) ^ a, c, d, k[15], 14, 18, -660478335);
  b = md5.cmn(((c ^ d) & a) ^ d, b, c, k[4], 20, 12, -405537848);
  a = md5.cmn(((b ^ c) & d) ^ c, a, b, k[9], 5, 27, 568446438);
  d = md5.cmn(((a ^ b) & c) ^ b, d, a, k[14], 9, 23, -1019803690);
  c = md5.cmn(((d ^ a) & b) ^ a, c, d, k[3], 14, 18, -187363961);
  b = md5.cmn(((c ^ d) & a) ^ d, b, c, k[8], 20, 12, 1163531501);
  a = md5.cmn(((b ^ c) & d) ^ c, a, b, k[13], 5, 27, -1444681467);
  d = md5.cmn(((a ^ b) & c) ^ b, d, a, k[2], 9, 23, -51403784);
  c = md5.cmn(((d ^ a) & b) ^ a, c, d, k[7], 14, 18, 1735328473);
  b = md5.cmn(((c ^ d) & a) ^ d, b, c, k[12], 20, 12, -1926607734);

  a = md5.cmn(b ^ c ^ d, a, b, k[5], 4, 28, -378558);
  d = md5.cmn(a ^ b ^ c, d, a, k[8], 11, 21, -2022574463);
  c = md5.cmn(d ^ a ^ b, c, d, k[11], 16, 16, 1839030562);
  b = md5.cmn(c ^ d ^ a, b, c, k[14], 23, 9, -35309556);
  a = md5.cmn(b ^ c ^ d, a, b, k[1], 4, 28, -1530992060);
  d = md5.cmn(a ^ b ^ c, d, a, k[4], 11, 21, 1272893353);
  c = md5.cmn(d ^ a ^ b, c, d, k[7], 16, 16, -155497632);
  b = md5.cmn(c ^ d ^ a, b, c, k[10], 23, 9, -1094730640);
  a = md5.cmn(b ^ c ^ d, a, b, k[13], 4, 28, 681279174);
  d = md5.cmn(a ^ b ^ c, d, a, k[0], 11, 21, -358537222);
  c = md5.cmn(d ^ a ^ b, c, d, k[3], 16, 16, -722521979);
  b = md5.cmn(c ^ d ^ a, b, c, k[6], 23, 9, 76029189);
  a = md5.cmn(b ^ c ^ d, a, b, k[9], 4, 28, -640364487);
  d = md5.cmn(a ^ b ^ c, d, a, k[12], 11, 21, -421815835);
  c = md5.cmn(d ^ a ^ b, c, d, k[15], 16, 16, 530742520);
  b = md5.cmn(c ^ d ^ a, b, c, k[2], 23, 9, -995338651);

  a = md5.cmn(c ^ (b | ~d), a, b, k[0], 6, 26, -198630844);
  d = md5.cmn(b ^ (a | ~c), d, a, k[7], 10, 22, 1126891415);
  c = md5.cmn(a ^ (d | ~b), c, d, k[14], 15, 17, -1416354905);
  b = md5.cmn(d ^ (c | ~a), b, c, k[5], 21, 11, -57434055);
  a = md5.cmn(c ^ (b | ~d), a, b, k[12], 6, 26, 1700485571);
  d = md5.cmn(b ^ (a | ~c), d, a, k[3], 10, 22, -1894986606);
  c = md5.cmn(a ^ (d | ~b), c, d, k[10], 15, 17, -1051523);
  b = md5.cmn(d ^ (c | ~a), b, c, k[1], 21, 11, -2054922799);
  a = md5.cmn(c ^ (b | ~d), a, b, k[8], 6, 26, 1873313359);
  d = md5.cmn(b ^ (a | ~c), d, a, k[15], 10, 22, -30611744);
  c = md5.cmn(a ^ (d | ~b), c, d, k[6], 15, 17, -1560198380);
  b = md5.cmn(d ^ (c | ~a), b, c, k[13], 21, 11, 1309151649);
  a = md5.cmn(c ^ (b | ~d), a, b, k[4], 6, 26, -145523070);
  d = md5.cmn(b ^ (a | ~c), d, a, k[11], 10, 22, -1120210379);
  c = md5.cmn(a ^ (d | ~b), c, d, k[2], 15, 17, 718787259);
  b = md5.cmn(d ^ (c | ~a), b, c, k[9], 21, 11, -343485551);

  return [a, b, c, d];
 },
 md51: function(s) {
  var n = s.length,
  state = false;

  for(var i = 64;i <= n;i += 64) {
   if(i == 64) {
    md5.md5blk(s.substring(0, 64));
    state = md5.md5cycle(md5.B.md5blks);
   }else{
    md5.md5blk(s.substring(i - 64, i));
    state = md5.md5cycleAdd(state, md5.B.md5blks);
   }
  }

  if(i > 64) {
   s = s.substring(i - 64);
  }

  var sl = s.length;

  for(i = 0;i < sl;++i) {
   md5.B.tail[i >> 2] |= s.charCodeAt(i) << md5.cS[i % 4];
  }
  md5.B.tail[i >> 2] |= md5.c4[i % 4];

  if(i > 55) {
   state = md5.md5cycleAdd(state, md5.B.tail);
   for(var j = 0;j < 16;j++) {
    md5.B.tail[j] = 0;
   }
  }

  md5.B.tail[14] = n * 8;

  if(typeof state == "boolean") {
   return md5.md5cycle(md5.B.tail);
  }else{
   return md5.md5cycleAdd(state, md5.B.tail);
  }
 },
 md5blk: function(s) {
  md5.B.md5blks[0]  =  s.charCodeAt(0) +  (s.charCodeAt(1) << 8) +  (s.charCodeAt(2) << 16) +  (s.charCodeAt(3) << 24);
  md5.B.md5blks[1]  =  s.charCodeAt(4) +  (s.charCodeAt(5) << 8) +  (s.charCodeAt(6) << 16) +  (s.charCodeAt(7) << 24);
  md5.B.md5blks[2]  =  s.charCodeAt(8) +  (s.charCodeAt(9) << 8) + (s.charCodeAt(10) << 16) + (s.charCodeAt(11) << 24);
  md5.B.md5blks[3]  = s.charCodeAt(12) + (s.charCodeAt(13) << 8) + (s.charCodeAt(14) << 16) + (s.charCodeAt(15) << 24);
  md5.B.md5blks[4]  = s.charCodeAt(16) + (s.charCodeAt(17) << 8) + (s.charCodeAt(18) << 16) + (s.charCodeAt(19) << 24);
  md5.B.md5blks[5]  = s.charCodeAt(20) + (s.charCodeAt(21) << 8) + (s.charCodeAt(22) << 16) + (s.charCodeAt(23) << 24);
  md5.B.md5blks[6]  = s.charCodeAt(24) + (s.charCodeAt(25) << 8) + (s.charCodeAt(26) << 16) + (s.charCodeAt(27) << 24);
  md5.B.md5blks[7]  = s.charCodeAt(28) + (s.charCodeAt(29) << 8) + (s.charCodeAt(30) << 16) + (s.charCodeAt(31) << 24);
  md5.B.md5blks[8]  = s.charCodeAt(32) + (s.charCodeAt(33) << 8) + (s.charCodeAt(34) << 16) + (s.charCodeAt(35) << 24);
  md5.B.md5blks[9]  = s.charCodeAt(36) + (s.charCodeAt(37) << 8) + (s.charCodeAt(38) << 16) + (s.charCodeAt(39) << 24);
  md5.B.md5blks[10] = s.charCodeAt(40) + (s.charCodeAt(41) << 8) + (s.charCodeAt(42) << 16) + (s.charCodeAt(43) << 24);
  md5.B.md5blks[11] = s.charCodeAt(44) + (s.charCodeAt(45) << 8) + (s.charCodeAt(46) << 16) + (s.charCodeAt(47) << 24);
  md5.B.md5blks[12] = s.charCodeAt(48) + (s.charCodeAt(49) << 8) + (s.charCodeAt(50) << 16) + (s.charCodeAt(51) << 24);
  md5.B.md5blks[13] = s.charCodeAt(52) + (s.charCodeAt(53) << 8) + (s.charCodeAt(54) << 16) + (s.charCodeAt(55) << 24);
  md5.B.md5blks[14] = s.charCodeAt(56) + (s.charCodeAt(57) << 8) + (s.charCodeAt(58) << 16) + (s.charCodeAt(59) << 24);
  md5.B.md5blks[15] = s.charCodeAt(60) + (s.charCodeAt(61) << 8) + (s.charCodeAt(62) << 16) + (s.charCodeAt(63) << 24);
 }
};