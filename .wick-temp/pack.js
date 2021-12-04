var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// node_modules/@candlelib/glow/build/glow.js
var glow_exports = {};
__export(glow_exports, {
  default: () => glow_default
});

// node_modules/@candlelib/wind/build/tables.js
var uni_id_start_discrete = [170, 181, 186, 748, 750, 895, 902, 908, 1369, 1749, 1791, 1808, 1969, 2042, 2074, 2084, 2088, 2365, 2384, 2482, 2493, 2510, 2556, 2654, 2749, 2768, 2809, 2877, 2929, 2947, 2972, 3024, 3133, 3200, 3261, 3294, 3389, 3406, 3517, 3716, 3749, 3773, 3782, 3840, 4159, 4193, 4238, 4295, 4301, 4696, 4800, 6103, 6108, 6314, 6823, 7418, 8025, 8027, 8029, 8126, 8305, 8319, 8450, 8455, 8469, 8484, 8486, 8488, 8526, 11559, 11565, 11631, 11823, 13312, 19893, 19968, 40943, 43259, 43471, 43642, 43697, 43712, 43714, 44032, 55203, 64285, 64318, 67592, 67644, 68096, 69415, 69956, 70006, 70106, 70108, 70280, 70461, 70480, 70751, 70855, 71236, 71352, 71935, 72161, 72163, 72192, 72250, 72272, 72349, 72768, 73030, 73112, 94032, 94179, 94208, 100343, 119970, 119995, 120134, 123214, 125259, 126500, 126503, 126521, 126523, 126530, 126535, 126537, 126539, 126548, 126551, 126553, 126555, 126557, 126559, 126564, 126590, 131072, 173782, 173824, 177972, 177984, 178205, 178208, 183969, 183984, 191456];
var uni_id_start_ranges = [65, 90, 97, 122, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 880, 884, 886, 887, 890, 893, 904, 906, 910, 929, 931, 1013, 1015, 1153, 1162, 1327, 1329, 1366, 1376, 1416, 1488, 1514, 1519, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1765, 1766, 1774, 1775, 1786, 1788, 1810, 1839, 1869, 1957, 1994, 2026, 2036, 2037, 2048, 2069, 2112, 2136, 2144, 2154, 2208, 2228, 2230, 2237, 2308, 2361, 2392, 2401, 2417, 2432, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2486, 2489, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2908, 2909, 2911, 2913, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3129, 3160, 3162, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3412, 3414, 3423, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3718, 3722, 3724, 3747, 3751, 3760, 3762, 3763, 3776, 3780, 3804, 3807, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4176, 4181, 4186, 4189, 4197, 4198, 4206, 4208, 4213, 4225, 4256, 4293, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5109, 5112, 5117, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5880, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6e3, 6016, 6067, 6176, 6264, 6272, 6276, 6279, 6312, 6320, 6389, 6400, 6430, 6480, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6656, 6678, 6688, 6740, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7296, 7304, 7312, 7354, 7357, 7359, 7401, 7404, 7406, 7411, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8031, 8061, 8064, 8116, 8118, 8124, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8336, 8348, 8458, 8467, 8473, 8477, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11568, 11623, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12591, 12593, 12686, 12704, 12730, 12784, 12799, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42653, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42943, 42946, 42950, 42999, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43261, 43262, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43488, 43492, 43494, 43503, 43514, 43518, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43646, 43695, 43701, 43702, 43705, 43709, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43824, 43866, 43868, 43879, 43888, 44002, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64287, 64296, 64298, 64310, 64312, 64316, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66335, 66349, 66378, 66384, 66421, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 67072, 67382, 67392, 67413, 67424, 67431, 67584, 67589, 67594, 67637, 67639, 67640, 67647, 67669, 67680, 67702, 67712, 67742, 67808, 67826, 67828, 67829, 67840, 67861, 67872, 67897, 67968, 68023, 68030, 68031, 68112, 68115, 68117, 68119, 68121, 68149, 68192, 68220, 68224, 68252, 68288, 68295, 68297, 68324, 68352, 68405, 68416, 68437, 68448, 68466, 68480, 68497, 68608, 68680, 68736, 68786, 68800, 68850, 68864, 68899, 69376, 69404, 69424, 69445, 69600, 69622, 69635, 69687, 69763, 69807, 69840, 69864, 69891, 69926, 69968, 70002, 70019, 70066, 70081, 70084, 70144, 70161, 70163, 70187, 70272, 70278, 70282, 70285, 70287, 70301, 70303, 70312, 70320, 70366, 70405, 70412, 70415, 70416, 70419, 70440, 70442, 70448, 70450, 70451, 70453, 70457, 70493, 70497, 70656, 70708, 70727, 70730, 70784, 70831, 70852, 70853, 71040, 71086, 71128, 71131, 71168, 71215, 71296, 71338, 71424, 71450, 71680, 71723, 71840, 71903, 72096, 72103, 72106, 72144, 72203, 72242, 72284, 72329, 72384, 72440, 72704, 72712, 72714, 72750, 72818, 72847, 72960, 72966, 72968, 72969, 72971, 73008, 73056, 73061, 73063, 73064, 73066, 73097, 73440, 73458, 73728, 74649, 74752, 74862, 74880, 75075, 77824, 78894, 82944, 83526, 92160, 92728, 92736, 92766, 92880, 92909, 92928, 92975, 92992, 92995, 93027, 93047, 93053, 93071, 93760, 93823, 93952, 94026, 94099, 94111, 94176, 94177, 100352, 101106, 110592, 110878, 110928, 110930, 110948, 110951, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 119808, 119892, 119894, 119964, 119966, 119967, 119973, 119974, 119977, 119980, 119982, 119993, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 123136, 123180, 123191, 123197, 123584, 123627, 124928, 125124, 125184, 125251, 126464, 126467, 126469, 126495, 126497, 126498, 126505, 126514, 126516, 126519, 126541, 126543, 126545, 126546, 126561, 126562, 126567, 126570, 126572, 126578, 126580, 126583, 126585, 126588, 126592, 126601, 126603, 126619, 126625, 126627, 126629, 126633, 126635, 126651];
var uni_id_cont_discrete = [95, 1471, 1479, 1648, 1809, 2045, 2492, 2519, 2558, 2620, 2641, 2677, 2748, 2876, 2946, 3031, 3260, 3415, 3530, 3542, 3633, 3761, 3893, 3895, 3897, 4038, 6109, 6313, 7405, 7412, 8276, 8417, 11647, 42607, 43010, 43014, 43019, 43493, 43587, 43696, 43713, 64286, 65343, 66045, 66272, 68159, 70003, 70206, 70487, 70750, 72164, 72263, 73018, 73031, 94031, 121461, 121476];
var uni_id_cont_ranges = [48, 57, 768, 879, 1155, 1159, 1425, 1469, 1473, 1474, 1476, 1477, 1552, 1562, 1611, 1641, 1750, 1756, 1759, 1764, 1767, 1768, 1770, 1773, 1776, 1785, 1840, 1866, 1958, 1968, 1984, 1993, 2027, 2035, 2070, 2073, 2075, 2083, 2085, 2087, 2089, 2093, 2137, 2139, 2259, 2273, 2275, 2307, 2362, 2364, 2366, 2383, 2385, 2391, 2402, 2403, 2406, 2415, 2433, 2435, 2494, 2500, 2503, 2504, 2507, 2509, 2530, 2531, 2534, 2543, 2561, 2563, 2622, 2626, 2631, 2632, 2635, 2637, 2662, 2673, 2689, 2691, 2750, 2757, 2759, 2761, 2763, 2765, 2786, 2787, 2790, 2799, 2810, 2815, 2817, 2819, 2878, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2914, 2915, 2918, 2927, 3006, 3010, 3014, 3016, 3018, 3021, 3046, 3055, 3072, 3076, 3134, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3170, 3171, 3174, 3183, 3201, 3203, 3262, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3298, 3299, 3302, 3311, 3328, 3331, 3387, 3388, 3390, 3396, 3398, 3400, 3402, 3405, 3426, 3427, 3430, 3439, 3458, 3459, 3535, 3540, 3544, 3551, 3558, 3567, 3570, 3571, 3636, 3642, 3655, 3662, 3664, 3673, 3764, 3772, 3784, 3789, 3792, 3801, 3864, 3865, 3872, 3881, 3902, 3903, 3953, 3972, 3974, 3975, 3981, 3991, 3993, 4028, 4139, 4158, 4160, 4169, 4182, 4185, 4190, 4192, 4194, 4196, 4199, 4205, 4209, 4212, 4226, 4237, 4239, 4253, 4957, 4959, 5906, 5908, 5938, 5940, 5970, 5971, 6002, 6003, 6068, 6099, 6112, 6121, 6155, 6157, 6160, 6169, 6277, 6278, 6432, 6443, 6448, 6459, 6470, 6479, 6608, 6617, 6679, 6683, 6741, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6832, 6845, 6912, 6916, 6964, 6980, 6992, 7001, 7019, 7027, 7040, 7042, 7073, 7085, 7088, 7097, 7142, 7155, 7204, 7223, 7232, 7241, 7248, 7257, 7376, 7378, 7380, 7400, 7415, 7417, 7616, 7673, 7675, 7679, 8255, 8256, 8400, 8412, 8421, 8432, 11503, 11505, 11744, 11775, 12330, 12335, 12441, 12442, 42528, 42537, 42612, 42621, 42654, 42655, 42736, 42737, 43043, 43047, 43136, 43137, 43188, 43205, 43216, 43225, 43232, 43249, 43263, 43273, 43302, 43309, 43335, 43347, 43392, 43395, 43443, 43456, 43472, 43481, 43504, 43513, 43561, 43574, 43596, 43597, 43600, 43609, 43643, 43645, 43698, 43700, 43703, 43704, 43710, 43711, 43755, 43759, 43765, 43766, 44003, 44010, 44012, 44013, 44016, 44025, 65024, 65039, 65056, 65071, 65075, 65076, 65101, 65103, 65296, 65305, 66422, 66426, 66720, 66729, 68097, 68099, 68101, 68102, 68108, 68111, 68152, 68154, 68325, 68326, 68900, 68903, 68912, 68921, 69446, 69456, 69632, 69634, 69688, 69702, 69734, 69743, 69759, 69762, 69808, 69818, 69872, 69881, 69888, 69890, 69927, 69940, 69942, 69951, 69957, 69958, 70016, 70018, 70067, 70080, 70089, 70092, 70096, 70105, 70188, 70199, 70367, 70378, 70384, 70393, 70400, 70403, 70459, 70460, 70462, 70468, 70471, 70472, 70475, 70477, 70498, 70499, 70502, 70508, 70512, 70516, 70709, 70726, 70736, 70745, 70832, 70851, 70864, 70873, 71087, 71093, 71096, 71104, 71132, 71133, 71216, 71232, 71248, 71257, 71339, 71351, 71360, 71369, 71453, 71467, 71472, 71481, 71724, 71738, 71904, 71913, 72145, 72151, 72154, 72160, 72193, 72202, 72243, 72249, 72251, 72254, 72273, 72283, 72330, 72345, 72751, 72758, 72760, 72767, 72784, 72793, 72850, 72871, 72873, 72886, 73009, 73014, 73020, 73021, 73023, 73029, 73040, 73049, 73098, 73102, 73104, 73105, 73107, 73111, 73120, 73129, 73459, 73462, 92768, 92777, 92912, 92916, 92976, 92982, 93008, 93017, 94033, 94087, 94095, 94098, 113821, 113822, 119141, 119145, 119149, 119154, 119163, 119170, 119173, 119179, 119210, 119213, 119362, 119364, 120782, 120831, 121344, 121398, 121403, 121452, 121499, 121503, 121505, 121519, 122880, 122886, 122888, 122904, 122907, 122913, 122915, 122916, 122918, 122922, 123184, 123190, 123200, 123209, 123628, 123641, 125136, 125142, 125252, 125258, 125264, 125273];
var j = new Uint16Array(191488);
j.fill(0);
function aii(table, value, indices) {
  const l = indices.length;
  for (let i2 = 0; i2 < l; i2++)
    table[indices[i2]] |= value;
}
function air(t, v, i_r) {
  const l = i_r.length;
  for (let i2 = 0; i2 < l; i2 += 2) {
    const r1 = i_r[i2], r2 = i_r[i2 + 1];
    const size = r2 + 1 - r1, a = [];
    for (let i3 = 0; i3 < size; i3++)
      a[i3] = r1 + i3;
    aii(t, v, a);
  }
}
air(j, 1, uni_id_start_ranges);
aii(j, 1, uni_id_start_discrete);
aii(j, 2, [34, 39, 96]);
aii(j, 3, [32, 160, 8194, 8195, 8196, 12288]);
aii(j, 4, [9]);
aii(j, 5, [13]);
aii(j, 6, [10]);
air(j, 7, [48, 57]);
aii(j, 8, [33, 37, 38, 42, 43, 58, 60, 61, 62]);
aii(j, 9, [40, 91, 123]);
aii(j, 10, [41, 93, 125]);
var id = 2;
var num = 4;
var hex = 16;
var oct = 32;
var bin = 64;
air(j, id << 8, [65, 90, 97, 122]);
air(j, id << 8, uni_id_start_ranges);
aii(j, id << 8, uni_id_start_discrete);
air(j, id << 8, uni_id_cont_ranges);
aii(j, id << 8, uni_id_cont_discrete);
air(j, hex << 8, [65, 70, 97, 122]);
air(j, bin << 8, [48, 49]);
air(j, oct << 8, [48, 55]);
air(j, (num | hex) << 8, [48, 57]);

// node_modules/@candlelib/wind/build/wind_syntax_error.js
var HORIZONTAL_TAB = 9;
var arrow = "^";
var thick_line = "=";
function blame(lex) {
  const tab_size = 4, window_size = 400, file = lex.source;
  let line_start = lex.off - lex.char, char = lex.char, l = lex.line, str = lex.str, len = str.length, sp = " ";
  lex.tl = lex.tl || 1;
  let prev_start = 0, next_start = 0, next_end = 0, i2 = 0;
  for (i2 = line_start; --i2 > 0 && j[str.codePointAt(i2)] !== 6; )
    ;
  prev_start = i2;
  for (i2 = lex.off + lex.tl; i2 < len && j[str.codePointAt(i2)] !== 6; i2++)
    ;
  next_start = i2;
  for (i2++; i2 < len && j[str.codePointAt(i2)] !== 6; i2++)
    ;
  next_end = i2;
  let pointer_pos = char - (line_start > 0 ? 1 : 0);
  for (i2 = line_start; i2 < lex.off; i2++)
    if (str.codePointAt(i2) == HORIZONTAL_TAB)
      pointer_pos += tab_size - 1;
  prev_start = Math.max(prev_start, 0);
  line_start = Math.max(line_start, 0);
  next_start = Math.max(next_start, 0);
  const prev_line = str.slice(prev_start + (prev_start > 0 ? 1 : 0), line_start).replace(/\n/g, "").replace(/\t/g, sp.repeat(tab_size)), curr_line = str.slice(line_start + (line_start > 0 ? 1 : 0), next_start).replace(/\n/g, "").replace(/\t/g, sp.repeat(tab_size)), next_line = str.slice(next_start + (next_start > 0 ? 1 : 0), next_end).replace(/\n/g, "").replace(/\t/g, " "), max_length = Math.max(prev_line.length, curr_line.length, next_line.length), min_length = Math.min(prev_line.length, curr_line.length, next_line.length), length_diff = max_length - min_length, w_size = window_size, w_start = Math.max(0, Math.min(pointer_pos - w_size / 2, max_length)), w_end = Math.max(0, Math.min(pointer_pos + w_size / 2, max_length)), w_pointer_pos = Math.max(0, Math.min(pointer_pos, max_length)) - w_start - (line_start == 0 ? 1 : 0), prev_line_o = (prev_line + sp.repeat(length_diff)).slice(w_start, w_end), curr_line_o = (curr_line + sp.repeat(length_diff)).slice(w_start, w_end), next_line_o = (next_line + sp.repeat(length_diff)).slice(w_start, w_end), trunc = w_start !== 0 ? "..." : "", line_number = (n) => ` ${(sp.repeat(3) + (n + 1)).slice(-(l + 1 + "").length)}: `, error_border = thick_line.repeat(curr_line_o.length + line_number.length + 8 + trunc.length);
  return [
    `${error_border}`,
    `${l - 1 > -1 ? line_number(l - 1) + trunc + prev_line_o + (prev_line_o.length < prev_line.length ? "..." : "") : ""}`,
    `${true ? line_number(l) + trunc + curr_line_o + (curr_line_o.length < curr_line.length ? "..." : "") : ""}`,
    `${" ".repeat(w_pointer_pos + trunc.length + line_number(l + 1).length) + arrow}`,
    `${next_start < str.length ? line_number(l + 1) + trunc + next_line_o + (next_line_o.length < next_line.length ? "..." : "") : ""}`,
    `${error_border}`
  ].filter((e) => !!e).join("\n");
}
var WindSyntaxError = class extends SyntaxError {
  constructor(message = "", lex) {
    super();
    this.name = "WindSyntaxError";
    this.lex = lex.copy();
    this.file = "";
    this.line = lex.line;
    this.column = lex.column;
    this.post_peek_lines = 1;
    this.pre_peek_lines = 1;
    this.window = 50;
    this.msg = message || "no error message";
  }
  get message() {
    const lex = this.lex, tab_size = 4, window_size = 400, message = this.msg, file = lex.source ?? "";
    return "\n" + message + "\n at " + file + ":" + (lex.line + 1) + ":" + lex.char + "\n" + blame(lex);
  }
};

// node_modules/@candlelib/wind/build/types.js
var TokenType;
(function(TokenType2) {
  TokenType2[TokenType2["number"] = 1] = "number";
  TokenType2[TokenType2["num"] = 1] = "num";
  TokenType2[TokenType2["identifier"] = 2] = "identifier";
  TokenType2[TokenType2["string"] = 4] = "string";
  TokenType2[TokenType2["white_space"] = 8] = "white_space";
  TokenType2[TokenType2["open_bracket"] = 16] = "open_bracket";
  TokenType2[TokenType2["close_bracket"] = 32] = "close_bracket";
  TokenType2[TokenType2["operator"] = 64] = "operator";
  TokenType2[TokenType2["symbol"] = 128] = "symbol";
  TokenType2[TokenType2["new_line"] = 256] = "new_line";
  TokenType2[TokenType2["tab"] = 512] = "tab";
  TokenType2[TokenType2["number_bin"] = 1025] = "number_bin";
  TokenType2[TokenType2["number_oct"] = 2049] = "number_oct";
  TokenType2[TokenType2["number_hex"] = 4097] = "number_hex";
  TokenType2[TokenType2["number_int"] = 8193] = "number_int";
  TokenType2[TokenType2["number_sci"] = 16385] = "number_sci";
  TokenType2[TokenType2["number_flt"] = 32769] = "number_flt";
  TokenType2[TokenType2["alpha_numeric"] = 3] = "alpha_numeric";
  TokenType2[TokenType2["white_space_new_line"] = 776] = "white_space_new_line";
  TokenType2[TokenType2["id"] = 2] = "id";
  TokenType2[TokenType2["str"] = 4] = "str";
  TokenType2[TokenType2["ws"] = 8] = "ws";
  TokenType2[TokenType2["ob"] = 16] = "ob";
  TokenType2[TokenType2["cb"] = 32] = "cb";
  TokenType2[TokenType2["op"] = 64] = "op";
  TokenType2[TokenType2["sym"] = 128] = "sym";
  TokenType2[TokenType2["nl"] = 256] = "nl";
  TokenType2[TokenType2["tb"] = 512] = "tb";
  TokenType2[TokenType2["int"] = 8193] = "int";
  TokenType2[TokenType2["integer"] = 8193] = "integer";
  TokenType2[TokenType2["bin"] = 1025] = "bin";
  TokenType2[TokenType2["binary"] = 1025] = "binary";
  TokenType2[TokenType2["oct"] = 2049] = "oct";
  TokenType2[TokenType2["octal"] = 2049] = "octal";
  TokenType2[TokenType2["hex"] = 4097] = "hex";
  TokenType2[TokenType2["hexadecimal"] = 4097] = "hexadecimal";
  TokenType2[TokenType2["flt"] = 32769] = "flt";
  TokenType2[TokenType2["float"] = 32769] = "float";
  TokenType2[TokenType2["sci"] = 16385] = "sci";
  TokenType2[TokenType2["scientific"] = 16385] = "scientific";
})(TokenType || (TokenType = {}));

// node_modules/@candlelib/wind/build/wind.js
var extended_jump_table = j.slice();
extended_jump_table[45] |= 2 << 8;
extended_jump_table[95] |= 2 << 8;
var Lexer = class {
  constructor(string = "", INCLUDE_WHITE_SPACE_TOKENS = false, PEEKING = false) {
    if (typeof string !== "string")
      throw new Error(`String value must be passed to Lexer. A ${typeof string} was passed as the 'string' argument.`);
    Object.defineProperties(this, {
      symbol_map: {
        writable: true,
        value: null
      },
      p: {
        writable: true,
        value: null
      },
      masked_values: {
        writable: true,
        value: 0
      },
      sl: {
        writable: true,
        enumerable: true,
        value: string.length
      },
      str: {
        writable: false,
        value: string
      }
    });
    this.type = 262144;
    this.tl = 0;
    this.off = 0;
    this.column = 0;
    this.line = 0;
    this.source = "";
    this.IWS = !INCLUDE_WHITE_SPACE_TOKENS;
    this.USE_EXTENDED_ID = false;
    this.PARSE_STRING = false;
    if (!PEEKING)
      this.next();
  }
  reset() {
    this.resetHead();
    this.next();
    return this;
  }
  resetHead() {
    this.off = 0;
    this.tl = 0;
    this.column = 0;
    this.line = 0;
    this.p = null;
    this.type = 32768;
  }
  copy(destination = new Lexer(this.str, false, true)) {
    destination.off = this.off;
    destination.column = this.column;
    destination.line = this.line;
    destination.tl = this.tl;
    destination.sl = this.sl;
    destination.type = this.type;
    destination.symbol_map = this.symbol_map;
    destination.masked_values = this.masked_values;
    destination.source = this.source;
    return destination;
  }
  sync(marker = this.p) {
    if (marker instanceof Lexer) {
      if (marker.str !== this.str)
        throw new Error("Cannot sync Lexers that tokenize different strings!");
      marker.copy(this);
    }
    return this;
  }
  peek(marker = this, peeking_marker = marker.p) {
    if (!peeking_marker) {
      if (!marker)
        return null;
      if (!marker.p) {
        marker.p = new Lexer(marker.str, false, true);
        peeking_marker = marker.p;
      }
    }
    marker.copy(peeking_marker);
    marker.next(peeking_marker);
    return peeking_marker;
  }
  next(marker = this, USE_CUSTOM_SYMBOLS = !!this.symbol_map) {
    if (marker.sl < 1) {
      marker.off = 0;
      marker.type = 32768;
      marker.tl = 0;
      marker.line = 0;
      marker.column = 0;
      return marker;
    }
    const l = marker.sl, str = marker.str, jump_table = this.id_lu, IWS = marker.IWS;
    let length = marker.tl, off = marker.off + length, type = TokenType.symbol, line = marker.line, base = off, char = marker.column, root2 = marker.off;
    if (off >= l) {
      length = 0;
      base = l;
      marker.column = char + (base - marker.off);
      marker.type = type;
      marker.off = base;
      marker.tl = 0;
      marker.line = line;
      return marker;
    }
    let NORMAL_PARSE = true;
    if (USE_CUSTOM_SYMBOLS) {
      let code = str.charCodeAt(off);
      let off2 = off;
      let map = this.symbol_map, m;
      while (code == 32 && IWS)
        code = str.charCodeAt(++off2), off++;
      while (m = map.get(code)) {
        map = m;
        off2 += 1;
        code = str.charCodeAt(off2);
      }
      if (map.IS_SYM) {
        NORMAL_PARSE = false;
        base = off;
        length = off2 - off;
      }
    }
    while (NORMAL_PARSE) {
      base = off;
      length = 1;
      const code = str.codePointAt(off);
      switch (jump_table[code] & 255) {
        case 0:
          type = TokenType.symbol;
          break;
        case 1:
          while (1) {
            while (++off < l && (id | num) & jump_table[str.codePointAt(off)] >> 8)
              ;
            if (this.USE_EXTENDED_ID) {
              if ("-_".includes(str[off]) && (id | num) & jump_table[str.codePointAt(off + 1)] >> 8)
                continue;
            }
            type = TokenType.identifier;
            length = off - base;
            break;
          }
          break;
        case 2:
          if (this.PARSE_STRING) {
            type = TokenType.symbol;
          } else {
            while (++off < l && str.codePointAt(off) !== code)
              ;
            type = TokenType.string;
            length = off - base + 1;
          }
          break;
        case 3:
          ++off;
          type = TokenType.white_space;
          length = off - base;
          break;
        case 4:
          ++off;
          type = TokenType.tab;
          length = off - base;
          break;
        case 5:
          length = 2;
        case 6:
          type = TokenType.new_line;
          line++;
          base = off;
          root2 = off;
          off += length;
          char = 0;
          break;
        case 7:
          type = TokenType.number;
          if (code == 48) {
            off++;
            if ("oxbOXB".includes(str[off])) {
              const lups = {
                b: { lu: bin, ty: TokenType.number_bin },
                o: { lu: oct, ty: TokenType.number_oct },
                x: { lu: hex, ty: TokenType.number_hex }
              };
              const { lu, ty } = lups[str[off].toLowerCase()];
              if (lu & jump_table[str.codePointAt(off + 1)] >> 8) {
                while (++off < l && lu & jump_table[str.codePointAt(off)] >> 8)
                  ;
                type = ty;
                if (!this.USE_EXTENDED_NUMBER_TYPES)
                  type = TokenType.number;
                length = off - base;
                break;
              }
            }
          } else {
            while (++off < l && num & jump_table[str.codePointAt(off)] >> 8)
              ;
          }
          if (str[off] == ".") {
            while (++off < l && num & jump_table[str.codePointAt(off)] >> 8)
              ;
            type = TokenType.number_flt;
          }
          if ("Ee".includes(str[off])) {
            const ori_off = off;
            off++;
            if ("-+".includes(str[off]))
              off++;
            if (!(num & jump_table[str.codePointAt(off)] >> 8)) {
              off = ori_off;
            } else {
              while (++off < l && num & jump_table[str.codePointAt(off)] >> 8)
                ;
              type = TokenType.number_sci;
            }
          }
          if (!this.USE_EXTENDED_NUMBER_TYPES)
            type = TokenType.number;
          length = off - base;
          type = TokenType.number;
          break;
        case 8:
          type = TokenType.operator;
          break;
        case 9:
          type = TokenType.open_bracket;
          break;
        case 10:
          type = TokenType.close_bracket;
          break;
      }
      if (IWS && type & TokenType.white_space_new_line) {
        if (off < l) {
          type = TokenType.symbol;
          continue;
        } else {
          base = l - off;
          marker.sl -= off;
          length = 0;
        }
      }
      break;
    }
    marker.type = type;
    marker.off = base;
    marker.tl = this.masked_values & 64 ? Math.min(1, length) : length;
    marker.column = char + base - root2;
    marker.line = line;
    return marker;
  }
  fence(marker = this) {
    if (marker.str !== this.str)
      return;
    this.sl = marker.off;
    return this;
  }
  find(string) {
    const cp = this.pk, match = new Lexer(string);
    match.resetHead();
    cp.tl = 0;
    const char_cache = cp.CHARACTERS_ONLY;
    match.CHARACTERS_ONLY = true;
    cp.CHARACTERS_ONLY = true;
    while (!cp.END) {
      const mpk = match.pk, cpk = cp.pk;
      while (!mpk.END && !cpk.END && cpk.tx == mpk.tx) {
        cpk.next();
        mpk.next();
      }
      if (mpk.END) {
        cp.CHARACTERS_ONLY = char_cache;
        return cp.next();
      }
      cp.next();
    }
    return cp;
  }
  seek(line, column) {
    const lex = this.copy();
    lex.CHARACTERS_ONLY = true;
    line = Math.max(0, line - 1);
    column = Math.max(1, column);
    while (!lex.END && lex.line != line) {
      lex.next();
    }
    while (!lex.END && lex.char < column) {
      lex.next();
    }
    ;
    lex.CHARACTERS_ONLY = this.CHARACTERS_ONLY;
    return lex;
  }
  createWindSyntaxError(message) {
    return new WindSyntaxError(message, this);
  }
  errorMessage(message = "") {
    return this.createWindSyntaxError(message).message;
  }
  errorMessageWithIWS(...v) {
    return this.errorMessage(...v) + "\n" + !this.IWS ? "\n The Lexer produced whitespace tokens" : "";
  }
  blame() {
    return blame(this);
  }
  throw(message) {
    throw new Error(this.errorMessage(message));
    ;
  }
  r() {
    return this.reset();
  }
  a(text) {
    return this.assert(text);
  }
  assert(text) {
    if (this.off < 0 || this.END)
      this.throw(`Expecting [${text}] but encountered end of string.`);
    if (this.text == text)
      this.next();
    else
      this.throw(`Expecting [${text}] but encountered [${this.text}]`);
    return this;
  }
  aC(char) {
    return this.assertCharacter(char);
  }
  assertCharacter(char) {
    if (this.off < 0 || this.END)
      this.throw(`Expecting [${char[0]}] but encountered end of string.`);
    if (this.ch == char[0])
      this.next();
    else
      this.throw(`Expecting [${char[0]}] but encountered [${this.ch}]`);
    return this;
  }
  s(start) {
    return this.slice(start);
  }
  slice(start = this.off) {
    if (start instanceof Lexer)
      start = start.off;
    return this.str.slice(start, this.off <= start ? this.sl : this.off);
  }
  setString(string, RESET = true) {
    this.str = string;
    this.sl = string.length;
    if (RESET)
      this.resetHead();
  }
  toString() {
    return this.slice();
  }
  trim(leave_leading_amount = 0, leave_trailing_amount = leave_leading_amount) {
    const lex = this.copy();
    let space_count = 0, off = lex.off;
    for (; lex.off < lex.sl; lex.off++) {
      const c = j[lex.string.charCodeAt(lex.off)];
      if (c > 2 && c < 7) {
        if (space_count >= leave_leading_amount) {
          off++;
        } else {
          space_count++;
        }
        continue;
      }
      break;
    }
    lex.off = off;
    space_count = 0;
    off = lex.sl;
    for (; lex.sl > lex.off; lex.sl--) {
      const c = j[lex.string.charCodeAt(lex.sl - 1)];
      if (c > 2 && c < 7) {
        if (space_count >= leave_trailing_amount) {
          off--;
        } else {
          space_count++;
        }
        continue;
      }
      break;
    }
    lex.sl = off;
    if (leave_leading_amount > 0)
      lex.IWS = false;
    lex.tl = 0;
    lex.next();
    return lex;
  }
  get char() {
    return this.column;
  }
  addSymbol(sym) {
    if (!this.symbol_map)
      this.symbol_map = new Map();
    let map = this.symbol_map;
    for (let i2 = 0; i2 < sym.length; i2++) {
      let code = sym.charCodeAt(i2);
      let m = map.get(code);
      if (!m) {
        m = map.set(code, new Map()).get(code);
      }
      map = m;
    }
    map.IS_SYM = true;
  }
  addSymbols(...syms) {
    for (const sym of syms)
      this.addSymbol(sym);
  }
  getEnd() {
    const copy = this.copy();
    while (!copy.END)
      copy.next();
    return copy;
  }
  get string() {
    return this.str;
  }
  get string_length() {
    return this.sl - this.off;
  }
  set string_length(s) {
  }
  get token() {
    return this.copy();
  }
  get ch() {
    return this.str[this.off];
  }
  get tx() {
    return this.text;
  }
  get text() {
    return this.off < 0 ? "" : this.str.slice(this.off, this.off + this.tl);
  }
  get ty() {
    return this.type;
  }
  get pos() {
    return this.off;
  }
  get pk() {
    return this.peek();
  }
  get n() {
    return this.next();
  }
  get END() {
    return this.off >= this.sl;
  }
  set END(v) {
  }
  get IGNORE_WHITE_SPACE() {
    return this.IWS;
  }
  set IGNORE_WHITE_SPACE(bool) {
    this.IWS = !!bool;
  }
  get CHARACTERS_ONLY() {
    return !!(this.masked_values & 64);
  }
  set CHARACTERS_ONLY(boolean) {
    this.masked_values = this.masked_values & ~64 | (+boolean | 0) << 6;
  }
  get IWS() {
    return !!(this.masked_values & 32);
  }
  set IWS(boolean) {
    this.masked_values = this.masked_values & ~32 | (+boolean | 0) << 5;
  }
  get PARSE_STRING() {
    return !!(this.masked_values & 16);
  }
  set PARSE_STRING(boolean) {
    this.masked_values = this.masked_values & ~16 | (+boolean | 0) << 4;
  }
  get USE_EXTENDED_ID() {
    return !!(this.masked_values & 128);
  }
  set USE_EXTENDED_ID(boolean) {
    this.masked_values = this.masked_values & ~128 | (+boolean | 0) << 7;
  }
  get USE_EXTENDED_NUMBER_TYPES() {
    return !!(this.masked_values & 4);
  }
  set USE_EXTENDED_NUMBER_TYPES(boolean) {
    this.masked_values = this.masked_values & ~4 | (+boolean | 0) << 2;
  }
  get types() {
    return TokenType;
  }
  setSource(source) {
    this.source = source;
    return this;
  }
};
Lexer.prototype.id_lu = j;
Lexer.prototype.addCharacter = Lexer.prototype.addSymbol;
function wind(string, INCLUDE_WHITE_SPACE_TOKENS = false) {
  return new Lexer(string, INCLUDE_WHITE_SPACE_TOKENS);
}
wind.constructor = Lexer;
Lexer.types = TokenType;
wind.types = TokenType;
var wind_default = wind;

// node_modules/@candlelib/css/build/properties/property.js
var CSSProperty = class {
  constructor(name2, original_value, val, IMP, pos = new Lexer(original_value)) {
    this.val = val;
    this.name = name2.replace(/\-/g, "_");
    this.precedence = +!!IMP << 31;
    this.pos = pos;
    this.VALID = true;
  }
  destroy() {
    this.name = "";
    this.val = null;
    this.pos = null;
  }
  toString(offset = 0) {
    const off = "    ".repeat(offset);
    if (!this.VALID)
      return `${off + this.name.replace(/\_/g, "-")}:unset`;
    return `${off + this.name.replace(/\_/g, "-")}:${this.value_string}${this.IMPORTANT ? " !important" : ""}`;
  }
  setValue(...values) {
    if (values[0] instanceof CSSProperty)
      return this.setValue(...values[0].val);
    let i2 = 0;
    for (const value of values) {
      const own_val = this.val[i2];
      if (own_val && value instanceof own_val.constructor)
        this.val[i2] = value;
      else
        this.val[i2] = value;
      i2++;
    }
    this.val.length = values.length;
  }
  get IMPORTANT() {
    return !!(this.precedence & -2147483648);
  }
  copyVal() {
    if (Array.isArray(this.val))
      return this.val.slice();
    else
      return this.val;
  }
  copy(precedence = 0) {
    const copy = new CSSProperty(this.name, this.original_value, this.copyVal(), this.IMPORTANT, this.pos);
    copy.precedence |= precedence;
    return copy;
  }
  set(prop) {
    if (prop.name == this.name)
      this.val = prop.val.slice();
  }
  get original_value() {
    return this.pos.slice();
  }
  get camelName() {
    return CSSProperty.camelName(this.name);
  }
  get css_type() {
    return "styleprop";
  }
  get value() {
    return this.val.length > 1 ? this.val : this.val[0];
  }
  get value_string() {
    if (!this.VALID)
      return "";
    return this.val.map((v) => v.toString()).join(" ");
  }
  static camelName(str) {
    return str.replace(/\-/g, "_").split("_").map((v, i2) => i2 > 0 ? v[0].toUpperCase() + v.slice(1) : v).join("");
  }
};

// node_modules/@candlelib/css/build/types/consume_comma.js
function consumeComma(lex) {
  if (lex.tx == ",")
    lex.next();
  return lex;
}

// node_modules/@candlelib/css/build/types/color.js
var color_list = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aquamarine": [127, 255, 212],
  "aqua": [0, 255, 25],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [],
  "blanchedalmond": [255, 235, 205],
  "blueviolet": [138, 43, 226],
  "blue": [0, 0, 255],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255],
  "chocolate": [210, 105, 30],
  "clear": [255, 255, 255],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 25],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140],
  "darkorchid": [153, 50, 204],
  "darkred": [139],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "greenyellow": [173, 255, 47],
  "green": [0, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [100, 149, 237],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "invisible": [0, 0, 0, 0],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavenderblush": [255, 240, 245],
  "lavender": [230, 230, 250],
  "lawngreen": [124, 252],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "limegreen": [50, 205, 50],
  "lime": [0, 255],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olivedrab": [107, 142, 35],
  "olive": [128, 128],
  "orangered": [255, 69],
  "orange": [255, 165],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "red": [255],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "transparent": [0, 0, 0, 0],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "whitesmoke": [245, 245, 245],
  "white": [255, 255, 255],
  "yellowgreen": [154, 205, 50],
  "yellow": [255, 255],
  "rebeccapurple": [102, 81, 153]
};
var CSS_Color = class extends Float64Array {
  constructor(r, g, b, a = 1) {
    super(4);
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;
    if (typeof r === "number") {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    } else if (typeof r == "string")
      this.set(CSS_Color._fs_(r) || { r: 255, g: 255, b: 255, a: 0 });
  }
  static fromHCMX(h, c, m, x) {
    let r = m, g = m, b = m;
    if (h < 1 && h >= 0) {
      r += c;
      g += x;
    } else if (h < 2) {
      r += x;
      g += c;
    } else if (h < 3) {
      g += c;
      b += x;
    } else if (h < 4) {
      g += x;
      b += c;
    } else if (h < 5) {
      r += x;
      b += c;
    } else if (h < 6) {
      r += c;
      b += x;
    }
    ;
    r *= 255;
    g *= 255;
    b *= 255;
    return new CSS_Color(r, g, b);
  }
  static fromHSV(hue, saturation, value) {
    const h = hue / 60, c = value * saturation, m = value - c, x = c * (1 - Math.abs(h % 2 - 1));
    return CSS_Color.fromHCMX(h, c, m, x);
  }
  static fromHSL(hue, saturation, lightness) {
    saturation *= 0.01;
    lightness *= 0.01;
    const h = hue % 360 / 60, c = (1 - Math.abs(2 * lightness - 1)) * saturation, x = c * (1 - Math.abs(h % 2 - 1)), m = lightness - 0.5 * c;
    return CSS_Color.fromHCMX(h, c, m, x);
  }
  static parse(l) {
    let c = CSS_Color._fs_(l);
    if (c) {
      let color = new CSS_Color();
      color.set(c);
      return color;
    }
    return null;
  }
  static _verify_(l) {
    let c = CSS_Color._fs_(l, true);
    if (c)
      return true;
    return false;
  }
  static _fs_(l, v = false) {
    let c;
    if (typeof l == "string")
      l = wind_default(l);
    let out = { r: 0, g: 0, b: 0, a: 1 };
    var tx;
    switch (l.ch) {
      case "#":
        l.next();
        let pk = l.copy();
        let type = l.types;
        pk.IWS = false;
        while (!(pk.ty & (type.new_line | type.ws)) && !pk.END && pk.ch !== ";") {
          pk.next();
        }
        var value = pk.slice(l);
        l.sync(pk);
        l.tl = 0;
        l.next();
        let num2 = parseInt(value, 16);
        if (value.length == 3 || value.length == 4) {
          if (value.length == 4) {
            const a = num2 >> 8 & 15;
            out.a = a | a << 4;
            num2 >>= 4;
          }
          const r = num2 >> 8 & 15;
          out.r = r | r << 4;
          const g = num2 >> 4 & 15;
          out.g = g | g << 4;
          const b = num2 & 15;
          out.b = b | b << 4;
        } else {
          if (value.length == 8) {
            out.a = num2 & 255;
            num2 >>= 8;
          }
          out.r = num2 >> 16 & 255;
          out.g = num2 >> 8 & 255;
          out.b = num2 & 255;
        }
        l.next();
        break;
      case "r":
        tx = l.tx;
        const RGB_TYPE = tx === "rgba" ? 1 : tx === "rgb" ? 2 : 0;
        if (RGB_TYPE > 0) {
          l.next().assert("(");
          out.r = parseInt(l.tx);
          consumeComma(l.next());
          if (l.ch == "%") {
            consumeComma(l.next());
            out.r = out.r * 255 / 100;
          }
          out.g = parseInt(l.tx);
          consumeComma(l.next());
          if (l.ch == "%") {
            consumeComma(l.next());
            out.g = out.g * 255 / 100;
          }
          out.b = parseInt(l.tx);
          consumeComma(l.next());
          if (l.ch == "%") {
            consumeComma(l.next());
            out.b = out.b * 255 / 100;
          }
          if (l.tx != ")") {
            if (RGB_TYPE == 2) {
              if (l.tx == "/") {
                l.next();
                out.a = parseInt(l.tx);
                l.next();
                if (l.ch == "%") {
                  l.next(), out.a = out.a * 255 / 100;
                }
              }
            } else if (RGB_TYPE < 2) {
              out.a = parseFloat(l.tx);
              l.next();
              if (l.ch == "%") {
                l.next(), out.a = out.a * 255 / 100;
              }
            }
          }
          l.assert(")");
          c = new CSS_Color();
          c.set(out);
          return c;
        }
      case "h":
        tx = l.tx;
        const HSL_TYPE = tx === "hsla" ? 1 : tx === "hsl" ? 2 : 0;
        let h = 0, s = 0, l_ = 0;
        if (HSL_TYPE > 0) {
          l.next();
          h = parseInt(l.next().tx);
          l.next();
          if (l.ch == "%") {
            l.next();
          }
          s = parseInt(l.next().tx);
          l.next();
          if (l.ch == "%") {
            l.next();
          }
          l_ = parseInt(l.next().tx);
          l.next();
          if (l.ch == "%")
            l.next();
          if (HSL_TYPE < 2) {
            out.a = parseFloat(l.next().tx);
            l.next();
            if (l.ch == "%")
              l.next(), out.a = out.a * 255 / 100;
          }
          l.a(")");
          return CSS_Color.fromHSL(h, s, l_);
        }
      default:
        let string = l.tx;
        if (l.ty == l.types.str) {
          string = string.slice(1, -1);
        }
        out = CSS_Color.colors[string.toLowerCase()];
        if (out)
          l.next();
    }
    return out;
  }
  get r() {
    return this[0];
  }
  set r(r) {
    this[0] = Math.min(Math.max(0, r), 255) | 0;
  }
  get g() {
    return this[1];
  }
  set g(g) {
    this[1] = Math.min(Math.max(0, g), 255) | 0;
  }
  get b() {
    return this[2];
  }
  set b(b) {
    this[2] = Math.min(Math.max(0, b), 255) | 0;
  }
  get a() {
    return this[3];
  }
  set a(a) {
    this[3] = a;
  }
  set(color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a != void 0 ? color.a : this.a;
  }
  add(color) {
    return new CSS_Color(color.r + this.r, color.g + this.g, color.b + this.b, color.a + this.a);
  }
  mult(val) {
    if (typeof val == "number") {
      return new CSS_Color(this.r * val, this.g * val, this.b * val, this.a * val);
    } else {
      return new CSS_Color(this.r * val.r, this.g * val.g, this.b * val.b, this.a * val.a);
    }
  }
  sub(color) {
    return new CSS_Color(this.r - color.r, this.g - color.g, this.b - color.b, this.a - color.a);
  }
  lerp(to, t) {
    return this.add(to.sub(this).mult(t));
  }
  copy(other) {
    return new CSS_Color(other);
  }
  toString() {
    if (this.a !== 1)
      return this.toRGBAString();
    return `#${("0" + this.r.toString(16)).slice(-2)}${("0" + this.g.toString(16)).slice(-2)}${("0" + this.b.toString(16)).slice(-2)}`;
  }
  toRGBAString() {
    const rgb = this.toRGBString();
    if (this.a == 1)
      return rgb;
    return "rgba" + rgb.slice(3, -1) + `,${this.a})`;
  }
  toRGBString() {
    return `rgb(${this.r | 0},${this.g | 0},${this.b | 0})`;
  }
  toHSLString() {
    let { r, g, b } = this;
    r /= 255;
    g /= 255;
    b /= 255;
    let h = 0, h_ = 0, l = 0, s = 0, M = Math.max(r, g, b), m = Math.min(r, g, b), c = M - m;
    if (M === r)
      h_ = (g - b) / c;
    else if (M === g)
      h_ = (b - r) / c + 2;
    else
      h_ = (r - g) / c + 4;
    h_ *= 60;
    h = h_;
    if (h < 0)
      h += 360;
    l = (r * 0.3 + g * 0.59 + b * 0.11) / (r + g + b);
    s = c == 0 ? 0 : c / M;
    return `hsl(${Math.round(h * 10) / 10},${Math.round(s * 10) / 10},${Math.round(l * 10) / 10})`;
  }
  toHSLAString() {
    const hsv = this.toHSLString();
    if (this.a == 1)
      return hsv;
    return "hsla" + hsv.slice(3, -1) + `,${this.a})`;
  }
};
CSS_Color.colors = Object.fromEntries(Object.entries(color_list).map(([key, v]) => [key, new CSS_Color(...v)]));

// node_modules/@candlelib/css/build/types/percentage.js
var CSS_Percentage = class extends Number {
  constructor(v) {
    if (typeof v == "string") {
      let lex = wind_default(v);
      let val = CSS_Percentage.parse(lex);
      if (val)
        return val;
    }
    super(v);
  }
  static parse(l) {
    let tx = l.tx, pky = l.pk.ty;
    if (l.ty == l.types.num || tx == "-" && pky == l.types.num) {
      let mult = 1;
      if (l.ch == "-") {
        mult = -1;
        tx = l.p.tx;
        l.p.next();
      }
      if (l.p.ch == "%") {
        l.sync().next();
        return new CSS_Percentage(parseFloat(tx) * mult);
      }
    }
    return null;
  }
  static _verify_(l) {
    if (typeof l == "string" && !isNaN(parseInt(l)) && l.includes("%"))
      return true;
    return false;
  }
  toJSON() {
    return super.toString() + "%";
  }
  toString(radix = 10) {
    return super.toString(radix) + "%";
  }
  get str() {
    return this.toString();
  }
  lerp(to, t) {
    return new CSS_Percentage(Number(this) + (to - Number(this)) * t);
  }
  copy(other) {
    return new CSS_Percentage(other);
  }
  get type() {
    return "%";
  }
};
CSS_Percentage.label_name = "Percentage";

// node_modules/@candlelib/css/build/types/number.js
var CSS_Number = class extends Number {
  static parse(l) {
    let sign = 1;
    if (l.ch == "-" && l.pk.ty == l.types.num) {
      l.sync();
      sign = -1;
    }
    if (l.ty == l.types.num) {
      let tx = l.tx;
      l.next();
      return new CSS_Number(sign * parseFloat(tx));
    }
    return null;
  }
};

// node_modules/@candlelib/css/build/types/length.js
var CSS_Length = class extends Number {
  static parse(l) {
    let tx = l.tx, pky = l.pk.ty;
    if (l.ty == l.types.num || tx == "-" && pky == l.types.num) {
      let sign = 1;
      if (l.ch == "-") {
        sign = -1;
        tx = l.p.tx;
        l.p.next();
      }
      if (l.p.ty == l.types.id) {
        let id2 = l.sync().tx;
        l.next();
        return new CSS_Length(parseFloat(tx) * sign, id2);
      } else if (l.p.ch == "%") {
        l.sync().next();
        return new CSS_Percentage(parseFloat(tx) * sign);
      } else {
        l.next();
        return new CSS_Number(parseFloat(tx) * sign);
      }
    }
    return null;
  }
  static _verify_(l) {
    if (typeof l == "string" && !isNaN(parseInt(l)) && !l.includes("%"))
      return true;
    return false;
  }
  constructor(v, u = "") {
    if (typeof v == "string") {
      let lex = wind_default(v);
      let val = CSS_Length.parse(lex);
      if (val)
        return val;
    }
    if (u) {
      switch (u) {
        case "fr":
          return new FlexLength(v);
        case "px":
          return new PXLength(v);
        case "mm":
          return new MMLength(v);
        case "cm":
          return new CMLength(v);
        case "in":
          return new INLength(v);
        case "pc":
          return new PCLength(v);
        case "pt":
          return new PTLength(v);
        case "ch":
          return new CHLength(v);
        case "em":
          return new EMLength(v);
        case "ex":
          return new EXLength(v);
        case "rem":
          return new REMLength(v);
        case "vh":
          return new VHLength(v);
        case "vw":
          return new VWLength(v);
        case "vmin":
          return new VMINLength(v);
        case "vmax":
          return new VMAXLength(v);
        case "deg":
          return new DEGLength(v);
        case "s":
          return new SecondsLength(v);
        case "ms":
          return new MillisecondsLength(v);
        case "%":
          return new CSS_Percentage(v);
      }
    }
    super(v);
  }
  get milliseconds() {
    switch (this.unit) {
      case "s":
        return Number(this) * 1e3;
    }
    return Number(this);
  }
  toString(radix = 10) {
    return super.toString(radix) + "" + this.unit;
  }
  toJSON(radix = 10) {
    return super.toString(radix) + "" + this.unit;
  }
  get str() {
    return this.toString();
  }
  lerp(to, t) {
    return new CSS_Length(Number(this) + (to - Number(this)) * t, this.unit);
  }
  copy(other) {
    return new CSS_Length(other, this.unit);
  }
  set unit(t) {
  }
  get unit() {
    return "";
  }
};
var PXLength = class extends CSS_Length {
  get unit() {
    return "px";
  }
};
var MMLength = class extends CSS_Length {
  get unit() {
    return "mm";
  }
};
var CMLength = class extends CSS_Length {
  get unit() {
    return "cm";
  }
};
var INLength = class extends CSS_Length {
  get unit() {
    return "in";
  }
};
var PTLength = class extends CSS_Length {
  get unit() {
    return "pt";
  }
};
var PCLength = class extends CSS_Length {
  get unit() {
    return "pc";
  }
};
var CHLength = class extends CSS_Length {
  get unit() {
    return "ch";
  }
};
var EMLength = class extends CSS_Length {
  get unit() {
    return "em";
  }
};
var EXLength = class extends CSS_Length {
  get unit() {
    return "ex";
  }
};
var REMLength = class extends CSS_Length {
  get unit() {
    return "rem";
  }
};
var VHLength = class extends CSS_Length {
  get unit() {
    return "vh";
  }
};
var VWLength = class extends CSS_Length {
  get unit() {
    return "vw";
  }
};
var VMINLength = class extends CSS_Length {
  get unit() {
    return "vmin";
  }
};
var VMAXLength = class extends CSS_Length {
  get unit() {
    return "vmax";
  }
};
var DEGLength = class extends CSS_Length {
  get unit() {
    return "deg";
  }
};
var SecondsLength = class extends CSS_Length {
  get unit() {
    return "s";
  }
};
var MillisecondsLength = class extends CSS_Length {
  get unit() {
    return "ms";
  }
};
var FlexLength = class extends CSS_Length {
  get unit() {
    return "fr";
  }
};

// node_modules/@candlelib/uri/build/uri.js
var fetch_reference = typeof window !== "undefined" ? window.fetch : null;
var uri_reg_ex = /(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:\/\/))?(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:([^\<\>\:\?\[\]\@\/\#\b\s]*)?)?\@)?(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((?:\[[0-9a-f]{1,4})+(?:\:[0-9a-f]{0,4}){2,7}\])|([^\<\>\:\?\[\]\@\/\#\b\s\.]{2,}(?:\.[^\<\>\:\?\[\]\@\/\#\b\s]*)*))?(?:\:(\d+))?((?:[^\?\[\]\#\s\b]*)+)?(?:\?([^\[\]\#\s\b]*))?(?:\#([^\#\s\b]*))?/i;
var root_reg = /^\/|^\w+\:|^\\\\/;
var relative_regex = /^(\.+\/)|^w/;
var double_forward_regex = /\/\//g;
var isPOSIX = (() => {
  if ("process" in globalThis)
    return process.platform !== "win32";
  return true;
})();
var STOCK_LOCATION = {
  protocol: "",
  host: "",
  port: "",
  path: "",
  hash: "",
  query: "",
  search: "",
  hostname: "",
  pathname: ""
};
var fetch_not_found_error_message = `'fetch' function is not defined`;
function getCORSModes(uri) {
  const IS_CORS = URI.GLOBAL.host !== uri.host && !!uri.host;
  return {
    IS_CORS,
    mode: IS_CORS ? "cors" : "same-origin",
    credentials: IS_CORS ? "omit" : "include"
  };
}
function fetchLocalText(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference)
      throw new Error(fetch_not_found_error_message);
    fetch_reference(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.text().then(res);
    }).catch((e) => rej(e));
  });
}
function fetchLocalJSON(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference)
      throw new Error(fetch_not_found_error_message);
    fetch_reference(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.json().then(rej);
      else
        r.json().then(res).catch(rej);
    }).catch((e) => rej(e));
  });
}
function fetchLocalBuffer(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference)
      throw new Error(fetch_not_found_error_message);
    fetch_reference(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.arrayBuffer().then(res).catch(rej);
    }).catch((e) => rej(e));
  });
}
function submitForm(uri, form_data, m = "same-origin") {
  return new Promise((res, rej) => {
    var form;
    if (form_data instanceof FormData)
      form = form_data;
    else {
      form = new FormData();
      for (let name2 in form_data)
        form.append(name2, form_data[name2] + "");
    }
    if (!fetch_reference)
      throw new Error(fetch_not_found_error_message);
    fetch_reference(uri + "", Object.assign({
      method: "POST",
      body: form
    }, getCORSModes(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.json().then(res);
    }).catch((e) => e.text().then(rej));
  });
}
function submitJSON(uri, json_data) {
  const data = JSON.stringify(json_data);
  return new Promise((res, rej) => {
    if (!fetch_reference)
      throw new Error(fetch_not_found_error_message);
    fetch_reference(uri + "", Object.assign({
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }, getCORSModes(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.json().then(rej);
      else
        r.json().then(res);
    }).catch((e) => e.text().then(rej));
  });
}
function toWindowsPath(path) {
  return path.replace(/\//g, "\\");
}
function toPosixPath(path) {
  return path.replace(/\\/g, "/");
}
var URI = class {
  constructor(uri = "", USE_LOCATION = false) {
    this.protocol = "";
    this.user = "";
    this.pwd = "";
    this.host = "";
    this.port = 0;
    this.path = "";
    this.query = "";
    this.hash = "";
    this.map = null;
    let IS_STRING = true, IS_LOCATION = false, location2 = typeof document !== "undefined" ? document.location : STOCK_LOCATION;
    if (typeof Location !== "undefined" && uri instanceof Location) {
      location2 = uri;
      uri = "";
      IS_LOCATION = true;
    }
    if ((!uri || typeof uri != "string") && !(uri instanceof URI)) {
      IS_STRING = false;
      IS_LOCATION = true;
      if (URI.GLOBAL && USE_LOCATION)
        return URI.GLOBAL;
    }
    if (uri instanceof URI) {
      this.protocol = uri.protocol;
      this.user = uri.user;
      this.pwd = uri.pwd;
      this.host = uri.host;
      this.port = uri.port;
      this.path = toPosixPath(uri.path.replace(double_forward_regex, "/"));
      this.query = uri.query;
      this.hash = uri.hash;
    } else if (IS_STRING) {
      let part = uri.match(uri_reg_ex);
      if (!part || part[0] !== uri)
        return new URI("localhost");
      this.protocol = part[1] || (USE_LOCATION ? location2.protocol : "");
      this.user = part[2] || "";
      this.pwd = part[3] || "";
      this.host = part[4] || part[5] || part[6] || (USE_LOCATION ? location2.hostname : "");
      this.port = parseInt(part[7]) || (USE_LOCATION ? parseInt(location2.port) : 0);
      this.path = toPosixPath((part[8] || (USE_LOCATION ? location2.pathname : "")).replace(double_forward_regex, "/"));
      this.query = part[9] || (USE_LOCATION ? location2.search.slice(1) : "");
      this.hash = part[10] || (USE_LOCATION ? location2.hash.slice(1) : "");
    } else if (IS_LOCATION && location2) {
      this.protocol = location2.protocol.replace(/\:/g, "");
      this.host = location2.hostname;
      this.port = parseInt(location2.port);
      this.path = toPosixPath(location2.pathname.replace(double_forward_regex, "/"));
      this.hash = location2.hash.slice(1);
      this.query = location2.search.slice(1);
      this._getQuery_();
      if (USE_LOCATION) {
        URI.GLOBAL = this;
        return URI.GLOBAL;
      }
    }
    this._getQuery_();
  }
  static resolveRelative(URL_or_url_new, URL_or_url_original = URI.GLOBAL ? URI.GLOBAL : typeof document != "undefined" && typeof document.location != "undefined" ? document.location.toString() : "") {
    const URL_old = new URI(URL_or_url_original), URL_new = new URI(URL_or_url_new);
    if (!(URL_old + "") || !(URL_new + ""))
      return null;
    if (URL_new.IS_RELATIVE) {
      let old = URL_old.path.split("/").slice(0, -1);
      let nw = URL_new.path.split("/");
      for (let i2 = 0; i2 < nw.length; i2++) {
        switch (nw[i2].replace(/\.\.+/g, "..")) {
          case ".":
            old.splice(old.length - 1, 0);
            break;
          case "..":
            old.splice(old.length - 1, 1);
            break;
          default:
            old.push(nw[i2]);
        }
      }
      URL_new.path = old.join("/").replace(/\/\//g, "/");
    }
    return URL_new;
  }
  async fetch(init) {
    return fetch_reference ? fetch_reference(this + "", init) : createResponse("", this + "");
  }
  static addProtocolHandler() {
  }
  _getQuery_() {
    if (this.query) {
      const data = this.query.split(/(?<!\\)\&/g).map((s) => s.split("="));
      this.map = new Map(data);
    }
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setLocation() {
    history.replaceState({}, "replaced state", `${this}`);
  }
  async DOES_THIS_EXIST() {
    return true;
  }
  toString() {
    let str = [];
    if (this.host) {
      if (this.protocol)
        str.push(`${this.protocol}://`);
      str.push(`${this.host}`);
    }
    if (this.port)
      str.push(`:${this.port}`);
    if (this.path) {
      const path = `${this.IS_RELATIVE || this.IS_ROOT ? "" : "/"}${this.path}`.replace(/\/\//g, "/");
      if (isPOSIX)
        str.push(toPosixPath(path));
      else
        str.push(toWindowsPath(path));
    }
    if (this.query)
      str.push((this.query[0] == "?" ? "" : "?") + this.query);
    if (this.hash)
      str.push("#" + this.hash);
    return str.join("");
  }
  getData() {
    const data = {};
    if (this.map)
      for (const [key, val] of this.map.entries()) {
        if (!val)
          data[key] = true;
        else
          data[key] = val;
      }
    return data;
  }
  setData(data) {
    const query_string = [];
    for (const name2 in data) {
      const val = data[name2];
      if (typeof val == "boolean") {
        if (val)
          query_string.push(name2);
      } else
        query_string.push(`${name2}=${val.toString()}`);
    }
    this.query = (query_string.length > 0 ? "?" + query_string.join("&") : "").replace(/\ +/g, "%20");
    return this;
  }
  fetchText() {
    return fetchLocalText(this).then((res) => (URI.RC.set(this.path, res), res));
  }
  fetchJSON() {
    return fetchLocalJSON(this).then((res) => (URI.RC.set(this.path, res), res));
  }
  fetchBuffer() {
    return fetchLocalBuffer(this).then((res) => (URI.RC.set(this.path, res), res));
  }
  submitForm(form_data) {
    return submitForm(this, form_data);
  }
  submitJSON(json_data, mode) {
    return submitJSON(this, json_data);
  }
  goto() {
    return;
  }
  get file() {
    return this.path.split("/").pop() ?? "";
  }
  get filename() {
    return this.file.split(".").shift() ?? "";
  }
  get dir() {
    return (this.path.split("/").slice(0, -1).join("/") + "/").replace(/\/\//g, "/");
  }
  get pathname() {
    return this.path;
  }
  get href() {
    return this.toString();
  }
  get ext() {
    const m = this.file.match(/\.([^\.]*)$/);
    return m ? m[1] : "";
  }
  set ext(ext) {
    ext = "." + ext.replace(/\./g, "");
    const current_ext = this.ext;
    if (current_ext)
      this.path = this.path.replace("." + current_ext, ext);
    else
      this.path += ext;
  }
  get search() {
    return this.query;
  }
  get IS_RELATIVE() {
    return relative_regex.test(this.path);
  }
  get IS_ROOT() {
    return !!root_reg.test(this.path);
  }
  static getEXEURL(imp) {
    let str = imp.url ?? "";
    const exe_url = new URI(str);
    if (exe_url.protocol == "file") {
      exe_url.protocol = "";
    } else if (exe_url.protocol != "")
      return exe_url;
    return new URI(exe_url);
  }
  static getCWDURL() {
    return URI.GLOBAL;
  }
  getRelativeTo(goal) {
    const to = new URI(goal);
    const pathA = this.dir.split("/").filter((s) => !!s && s !== ".");
    const pathB = to.dir.split("/").filter((s) => !!s && s !== ".");
    let indiceA = 0, indiceB = 0, max = pathA.length - 1;
    for (let j2 = pathA.length - 1; j2 >= 0; j2--) {
      for (let i2 = pathB.length - 1; i2 >= 0; i2--) {
        let id2 = i2 + 1, jd = j2 + 1, length = 0;
        while (--id2 >= 0 && --jd >= 0 && pathB[id2] == pathA[jd])
          length++;
        if (length > 0 && length <= max && (j2 == 0 || to.IS_RELATIVE)) {
          max = length;
          indiceA = j2 + 1;
          indiceB = i2 + 1;
        }
      }
    }
    const new_path = pathA.slice(indiceA).map((_) => "..").concat(pathB.slice(indiceB)).concat(to.file).join("/");
    to.path = new_path;
    return to;
  }
  isSUBDIRECTORY_OF(candidate_parent) {
    if (candidate_parent.IS_RELATIVE)
      return false;
    const own_path = (this.IS_RELATIVE ? URI.resolveRelative(this, candidate_parent) || new URI() : this).dir.split("/").slice(0, -1), candidate_path = candidate_parent.dir.split("/").slice(0, -1);
    if (candidate_path.length >= own_path.length)
      return false;
    for (let i2 = 0; i2 < candidate_path.length; i2++)
      if (candidate_path[i2] !== own_path[i2])
        return false;
    return true;
  }
};
URI.RC = new Map();
URI.GLOBAL = typeof location != "undefined" ? new URI(location) : new URI();
var SIMDATA = null;
URI.simulate = function() {
  SIMDATA = new Map();
  URI.prototype.fetchText = async (d) => (d = this.toString(), SIMDATA.get(d)) ? SIMDATA.get(d) : "";
  URI.prototype.fetchJSON = async (d) => (d = this.toString(), SIMDATA.get(d)) ? JSON.parse(SIMDATA.get(d).toString()) : {};
};
URI.addResource = (n, v) => n && v && (SIMDATA || (SIMDATA = new Map())) && SIMDATA.set(n.toString(), v.toString);
var POLYFILLED = false;
URI.server = typeof globalThis["process"] == "undefined" ? async () => {
} : async function(root_dir) {
  root_dir = root_dir || process.cwd() + "/";
  try {
    const fsr = await import("fs");
    const fs = fsr.promises;
    const path = await import("path");
    const http = await import("http");
    if (typeof global !== "undefined" && !POLYFILLED) {
      POLYFILLED = true;
      URI.GLOBAL = new URI(root_dir);
      const g = global;
      g.document = g.document || {};
      g.document.location = URI.GLOBAL;
      g.location = URI.GLOBAL;
      const cached = URI.resolveRelative;
      URI.resolveRelative = function(new_url, old_url = URI.GLOBAL) {
        let URL_old = new URI(old_url), URL_new = new URI(new_url);
        if (!URL_new.IS_RELATIVE && !URL_new.IS_ROOT) {
          const base_path = URL_old.path.split("/").filter((s) => s !== ".."), new_path = URL_new + "";
          let i2 = base_path.length;
          while (i2-- >= 1) {
            try {
              var search_path;
              if (base_path[i2] == "node_modules")
                search_path = new URI([...base_path.slice(0, i2 + 1), new_path].join("/"));
              else {
                search_path = new URI([...base_path.slice(0, i2 + 1), "node_modules", new_path].join("/"));
              }
              const stats = fsr.statSync(search_path + "");
              if (stats)
                return new URI(search_path + "");
            } catch (e) {
            }
          }
          return URL_new;
        }
        return cached(URL_new, URL_old);
      };
      fetch_reference = g.fetch = async (uri, data) => {
        if (data?.IS_CORS) {
          return new Promise((res, rej) => {
            try {
              http.get(uri, data, (req) => {
                let body = "";
                req.setEncoding("utf8");
                req.on("data", (d) => {
                  body += d;
                });
                req.on("end", () => res(createResponse(body, uri + "")));
              });
            } catch (e) {
              rej(e);
            }
          });
        } else {
          try {
            let p = path.resolve(process.cwd(), "" + uri);
            const body = await fs.readFile(p);
            return createResponse(body, uri + "");
          } catch (err) {
            throw err;
          }
        }
      };
      URI.prototype.DOES_THIS_EXIST = async function() {
        if (!this.IS_RELATIVE)
          return !!await fs.stat(this.toString()).catch((e) => false);
        return false;
      };
    }
  } catch (e) {
    console.error("Unable to load URI.server. Is this package running on a browser?");
    return;
  }
};
Object.freeze(URI.RC);
Object.seal(URI);
var uri_default = URI;
function createResponse(body, url) {
  return {
    get type() {
      return "basic";
    },
    get ok() {
      return true;
    },
    get bodyUsed() {
      return true;
    },
    get redirected() {
      return false;
    },
    get status() {
      return 200;
    },
    get statusText() {
      return "200";
    },
    get headers() {
      return null;
    },
    get body() {
      return Uint8Array.from(body);
    },
    get trailer() {
      return (async () => null)();
    },
    get url() {
      return url;
    },
    clone() {
      return createResponse(body, url);
    },
    formData: () => null,
    text: async () => body instanceof Buffer ? body.toString("utf8") : body,
    json: async () => JSON.parse(body instanceof Buffer ? body.toString("utf8") : body),
    arrayBuffer: async () => body instanceof Buffer ? body.buffer : Buffer.from(body)
  };
}

// node_modules/@candlelib/css/build/types/url.js
var CSS_URL = class extends uri_default {
  static parse(l) {
    if (l.tx == "url" || l.tx == "uri") {
      l.next().a("(");
      let v = "";
      if (l.ty == l.types.str) {
        v = l.tx.slice(1, -1);
        l.next().a(")");
      } else {
        const p = l.peek();
        while (!p.END && p.next().tx !== ")") {
        }
        v = p.slice(l);
        l.sync().a(")");
      }
      return new CSS_URL(v);
    }
    if (l.ty == l.types.str) {
      let v = l.tx.slice(1, -1);
      l.next();
      return new CSS_URL(v);
    }
    return null;
  }
  toString() {
    return `url("${super.toString()}")`;
  }
};

// node_modules/@candlelib/css/build/types/string.js
var CSS_String = class extends String {
  static parse(l) {
    if (l.ty == l.types.str) {
      let tx = l.tx;
      l.next();
      return new CSS_String(tx);
    }
    return null;
  }
  constructor(string) {
    super(string);
  }
};

// node_modules/@candlelib/css/build/types/id.js
var CSS_Id = class extends String {
  static parse(l) {
    if (l.ty == l.types.id) {
      let tx = l.tx;
      l.next();
      return new CSS_Id(tx);
    }
    return null;
  }
};

// node_modules/@candlelib/css/build/types/shape.js
var CSS_Shape = class extends Array {
  static parse(l) {
    if (l.tx == "inset" || l.tx == "circle" || l.tx == "ellipse" || l.tx == "polygon" || l.tx == "rect") {
      l.next().a("(");
      let v = "";
      if (l.ty == l.types.str) {
        v = l.tx.slice(1, -1);
        l.next().a(")");
      } else {
        let p = l.pk;
        while (!p.END && p.next().tx !== ")") {
        }
        v = p.slice(l);
        l.sync().a(")");
      }
      return new CSS_Shape(v);
    }
    return null;
  }
};

// node_modules/@candlelib/css/build/types/cubic_bezier.js
var pow = Math.pow;
var sqrt = Math.sqrt;
var acos = Math.acos;
var cos = Math.cos;
var PI = Math.PI;
function cuberoot(v) {
  if (v < 0)
    return -pow(-v, 1 / 3);
  return pow(v, 1 / 3);
}
function point(t, p1, p2, p3, p4) {
  var ti = 1 - t;
  var ti2 = ti * ti;
  var t2 = t * t;
  return ti * ti2 * p1 + 3 * ti2 * t * p2 + t2 * 3 * ti * p3 + t2 * t * p4;
}
var CSS_Bezier = class extends Float64Array {
  static parse(l) {
    let out = null;
    switch (l.tx) {
      case "cubic":
        l.next().a("(");
        let v1 = parseFloat(l.tx);
        let v2 = parseFloat(l.next().a(",").tx);
        let v3 = parseFloat(l.next().a(",").tx);
        let v4 = parseFloat(l.next().a(",").tx);
        l.a(")");
        out = new CSS_Bezier(v1, v2, v3, v4);
        break;
      case "ease":
        l.next();
        out = new CSS_Bezier(0.25, 0.1, 0.25, 1);
        break;
      case "ease-in":
        l.next();
        out = new CSS_Bezier(0.42, 0, 1, 1);
        break;
      case "ease-out":
        l.next();
        out = new CSS_Bezier(0, 0, 0.58, 1);
        break;
      case "ease-in-out":
        l.next();
        out = new CSS_Bezier(0.42, 0, 0.58, 1);
        break;
    }
    return out;
  }
  constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
    super(8);
    if (typeof x1 == "number") {
      if (arguments.length == 4) {
        this[0] = 0;
        this[1] = 0;
        this[2] = x1;
        this[3] = y1;
        this[4] = x2;
        this[5] = y2;
        this[6] = 1;
        this[7] = 1;
        return;
      }
      this[0] = x1;
      this[1] = y1;
      this[2] = x2;
      this[3] = y2;
      this[4] = x3;
      this[5] = y3;
      this[6] = x4;
      this[7] = y4;
      return;
    }
    if (x1 instanceof Array) {
      this[0] = x1[0];
      this[1] = x1[1];
      this[2] = x1[2];
      this[3] = x1[3];
      this[4] = x1[4];
      this[5] = x1[5];
      this[6] = x1[6];
      this[7] = x1[4];
      return;
    }
  }
  get x1() {
    return this[0];
  }
  set x1(v) {
    this[0] = v;
  }
  get x2() {
    return this[2];
  }
  set x2(v) {
    this[2] = v;
  }
  get x3() {
    return this[4];
  }
  set x3(v) {
    this[4] = v;
  }
  get x4() {
    return this[6];
  }
  set x4(v) {
    this[6] = v;
  }
  get y1() {
    return this[1];
  }
  set y1(v) {
    this[1] = v;
  }
  get y2() {
    return this[3];
  }
  set y2(v) {
    this[3] = v;
  }
  get y3() {
    return this[5];
  }
  set y3(v) {
    this[5] = v;
  }
  get y4() {
    return this[7];
  }
  set y4(v) {
    this[7] = v;
  }
  add(x, y = 0) {
    return new CSS_Bezier(this[0] + x, this[1] + y, this[2] + x, this[3] + y, this[4] + x, this[5] + y, this[6] + x, this[7] + y);
  }
  valY(t) {
    return point(t, this[1], this[3], this[5], this[7]);
  }
  valX(t) {
    return point(t, this[0], this[2], this[4], this[6]);
  }
  roots(p1, p2, p3, p4) {
    var d = -p1 + 3 * p2 - 3 * p3 + p4, a = (3 * p1 - 6 * p2 + 3 * p3) / d, b = (-3 * p1 + 3 * p2) / d, c = p1 / d;
    var p = (3 * b - a * a) / 3, p3 = p / 3, q = (2 * a * a * a - 9 * a * b + 27 * c) / 27, q2 = q / 2, discriminant = q2 * q2 + p3 * p3 * p3;
    var u1, v1, root1, root2, root3;
    if (discriminant < 0) {
      var mp3 = -p / 3, mp33 = mp3 * mp3 * mp3, r = sqrt(mp33), t = -q / (2 * r), cosphi = t < -1 ? -1 : t > 1 ? 1 : t, phi = acos(cosphi), crtr = cuberoot(r), t1 = 2 * crtr;
      root1 = t1 * cos(phi / 3) - a / 3;
      root2 = t1 * cos((phi + 2 * PI) / 3) - a / 3;
      root3 = t1 * cos((phi + 4 * PI) / 3) - a / 3;
      return [root3, root1, root2];
    }
    if (discriminant === 0) {
      u1 = q2 < 0 ? cuberoot(-q2) : -cuberoot(q2);
      root1 = 2 * u1 - a / 3;
      root2 = -u1 - a / 3;
      return [root2, root1];
    }
    var sd = sqrt(discriminant);
    u1 = cuberoot(sd - q2);
    v1 = cuberoot(sd + q2);
    root1 = u1 - v1 - a / 3;
    return [root1];
  }
  rootsY() {
    return this.roots(this[1], this[3], this[5], this[7]);
  }
  rootsX() {
    return this.roots(this[0], this[2], this[4], this[6]);
  }
  getYatX(x) {
    var x1 = this[0] - x, x2 = this[2] - x, x3 = this[4] - x, x4 = this[6] - x, x2_3 = x2 * 3, x1_3 = x1 * 3, x3_3 = x3 * 3, d = -x1 + x2_3 - x3_3 + x4, di = 1 / d, i3 = 1 / 3, a = (x1_3 - 6 * x2 + x3_3) * di, b = (-x1_3 + x2_3) * di, c = x1 * di, p = (3 * b - a * a) * i3, p3 = p * i3, q = (2 * a * a * a - 9 * a * b + 27 * c) * (1 / 27), q2 = q * 0.5, discriminant = q2 * q2 + p3 * p3 * p3;
    var u1, v1, root2;
    if (discriminant < 0) {
      var mp3 = -p / 3, mp33 = mp3 * mp3 * mp3, r = sqrt(mp33), t = -q / (2 * r), cosphi = t < -1 ? -1 : t > 1 ? 1 : t, phi = acos(cosphi), crtr = cuberoot(r), t1 = 2 * crtr;
      root2 = t1 * cos((phi + 4 * PI) / 3) - a / 3;
    } else if (discriminant === 0) {
      u1 = q2 < 0 ? cuberoot(-q2) : -cuberoot(q2);
      root2 = -u1 - a * i3;
    } else {
      var sd = sqrt(discriminant);
      u1 = cuberoot(sd - q2);
      v1 = cuberoot(sd + q2);
      root2 = u1 - v1 - a * i3;
    }
    return point(root2, this[1], this[3], this[5], this[7]);
  }
  draw(ctx, s = 1) {
    ctx.beginPath();
    ctx.moveTo(this[0] * s, this[1] * s);
    ctx.bezierCurveTo(this[2] * s, this[3] * s, this[4] * s, this[5] * s, this[6] * s, this[7] * s);
    ctx.stroke();
  }
  toString() {
    return `cubic-bezier(${this[2]},${this[3]},${this[4]},${this[5]})`;
  }
};

// node_modules/@candlelib/css/build/types/gradient.js
var Stop = class {
  constructor(color, percentage) {
    this.color = color;
    this.percentage = percentage || null;
  }
  toString() {
    return `${this.color}${this.percentage ? " " + this.percentage.toString() : ""}`;
  }
};
var CSS_Gradient = class {
  constructor(type = 0, rot = new CSS_Length(0, "deg")) {
    this.type = type;
    this.direction = rot;
    this.stops = [];
  }
  static parse(l) {
    if (typeof l == "string") {
      l = new Lexer(l);
      l.USE_EXTENDED_ID = true;
      l.tl = 0;
      l.next();
    }
    try {
      if (l.ty == l.types.id) {
        switch (l.tx) {
          case "linear-gradient":
            l.next().a("(");
            let dir, num2, rot = null;
            if (l.tx == "to") {
            } else if (l.ty == l.types.num) {
              rot = CSS_Length.parse(l);
              l.a(",");
            }
            let stops = [];
            while (!l.END && l.ch != ")") {
              let v = CSS_Color.parse(l), len = null;
              if (l.ch != ",") {
                if (!(len = CSS_Length.parse(l)))
                  len = CSS_Percentage.parse(l);
              }
              ;
              consumeComma(l);
              stops.push(new Stop(v, len));
              if (l.ch == ")")
                break;
            }
            l.a(")");
            let grad = new CSS_Gradient(0, rot);
            grad.stops = stops;
            l.sync(l);
            return grad;
        }
      }
    } catch (e) {
    }
    return null;
  }
  toString() {
    let str = [];
    switch (this.type) {
      case 0:
        str.push("linear-gradient(");
        if (Number(this.direction) !== 0)
          str.push(this.direction.toString() + ",");
        break;
    }
    for (let i2 = 0; i2 < this.stops.length; i2++)
      str.push(this.stops[i2].toString() + (i2 < this.stops.length - 1 ? "," : ""));
    str.push(")");
    return str.join(" ");
  }
};

// node_modules/@candlelib/css/build/types/media.js
var $medh = (prefix) => ({
  parse: (l, r, a, n = 0) => (n = CSS_Length.parse(l, r, a), prefix > 0 ? prefix > 1 ? (win) => win.innerHeight <= n : (win) => win.innerHeight >= n : (win) => win.screen.height == n)
});
var $medw = (prefix) => ({
  parse: (l, r, a, n = 0) => (n = CSS_Length.parse(l, r, a), prefix > 0 ? prefix > 1 ? (win) => win.innerWidth >= n : (win) => win.innerWidth <= n : (win) => win.screen.width == n)
});
function CSS_Media_handle(type, prefix) {
  switch (type) {
    case "h":
      return $medh(prefix);
    case "w":
      return $medw(prefix);
  }
  return {
    parse: function(a) {
      debugger;
    }
  };
}

// node_modules/@candlelib/css/build/types/transform.js
function getValue(lex, attribute) {
  let v = lex.tx, mult = 1;
  if (v == "-")
    v = lex.n.tx, mult = -1;
  if (lex.pk.tx == ".")
    lex.next(), v += lex.tx;
  if (lex.pk.ty == lex.types.number)
    lex.next(), v += lex.tx;
  if (lex.pk.tx == "e")
    lex.next(), v += lex.tx;
  if (lex.pk.tx == "-")
    lex.next(), v += lex.tx;
  if (lex.pk.ty == lex.types.number)
    lex.next(), v += lex.tx;
  let n = parseFloat(v) * mult;
  lex.next();
  if (lex.ch !== ")" && lex.ch !== ",") {
    switch (lex.tx) {
      case "%":
        break;
      case "grad":
        n *= Math.PI / 200;
        break;
      case "deg":
        n *= Math.PI / 180;
        break;
      case "turn":
        n *= Math.PI * 2;
        break;
      case "px":
        break;
      case "em":
        break;
    }
    lex.next();
  }
  return n;
}
function ParseString(string, transform) {
  let lex = null;
  lex = string;
  if (typeof string == "string")
    lex = wind_default(string);
  while (!lex.END) {
    let tx = lex.tx;
    lex.next();
    switch (tx) {
      case "matrix":
        let a = getValue(lex.a("(")), b = getValue(lex.a(",")), c = getValue(lex.a(",")), d = getValue(lex.a(",")), r = -Math.atan2(b, a), sx1 = a / Math.cos(r) || 0, sx2 = b / -Math.sin(r) || 0, sy1 = c / Math.sin(r) || 0, sy2 = d / Math.cos(r) || 0;
        if (sx2 !== 0)
          transform.sx = (sx1 + sx2) * 0.5;
        else
          transform.sx = sx1;
        if (sy1 !== 0)
          transform.sy = (sy1 + sy2) * 0.5;
        else
          transform.sy = sy2;
        transform.px = getValue(lex.a(","));
        transform.py = getValue(lex.a(","));
        transform.r = r;
        lex.a(")");
        break;
      case "matrix3d":
        break;
      case "translate":
        transform.px = getValue(lex.a("("), "left");
        lex.a(",");
        transform.py = getValue(lex, "left");
        lex.a(")");
        continue;
      case "translateX":
        transform.px = getValue(lex.a("("), "left");
        lex.a(")");
        continue;
      case "translateY":
        transform.py = getValue(lex.a("("), "left");
        lex.a(")");
        continue;
      case "translateZ":
        transform = CSS_Transform3D.FromCSS_Transform2D(transform);
        transform.pz = getValue(lex.a("("), "left");
        lex.a(")");
        continue;
      case "scale":
        transform.sx = getValue(lex.a("("), "left");
        if (lex.ch == ",") {
          lex.a(",");
          transform.sy = getValue(lex, "left");
        } else
          transform.sy = transform.sx;
        lex.a(")");
        continue;
      case "scaleX":
        transform.sx = getValue(lex.a("("), "left");
        lex.a(")");
        continue;
      case "scaleY":
        transform.sy = getValue(lex.a("("), "left");
        lex.a(")");
        continue;
      case "scaleZ":
        transform = CSS_Transform3D.FromCSS_Transform2D(transform);
        transform.sz = getValue(lex.a("("));
        lex.a(")");
        break;
      case "rotate":
        transform.r = getValue(lex.a("("));
        lex.a(")");
        continue;
      case "rotateX":
        transform = CSS_Transform3D.FromCSS_Transform2D(transform);
        transform.rx = getValue(lex.a("("));
        lex.a(")");
        break;
      case "rotateY":
        transform = CSS_Transform3D.FromCSS_Transform2D(transform);
        transform.ry = getValue(lex.a("("));
        lex.a(")");
        break;
      case "rotateZ":
        if (transform instanceof CSS_Transform2D) {
          transform.r = getValue(lex.a("("));
        } else {
          transform = CSS_Transform3D.FromCSS_Transform2D(transform);
          transform.rz = getValue(lex.a("("));
        }
        lex.a(")");
        break;
      case "rotate3d":
        break;
      case "perspective":
        break;
    }
    lex.next();
  }
  return transform;
}
var cos2 = Math.cos;
var sin = Math.sin;
var smooth_float = (i2) => Math.round(i2 * 1e4) * 1e-4;
var CSS_Transform2D = class extends Float64Array {
  static parse(lex) {
    return ParseString(lex, new CSS_Transform2D());
  }
  static ToString(pos = [0, 0], scl = [1, 1], rot = 0) {
    var px = 0, py = 0, sx = 1, sy = 1, r = 0, cos3 = 1, sin2 = 0;
    if (pos.length == 5) {
      px = pos[0];
      py = pos[1];
      sx = pos[2];
      sy = pos[3];
      r = pos[4];
    } else {
      px = pos[0];
      py = pos[1];
      sx = scl[0];
      sy = scl[1];
      r = rot;
    }
    if (r !== 0) {
      cos3 = Math.cos(r);
      sin2 = Math.sin(r);
    }
    return `matrix(${[cos3 * sx, -sin2 * sx, sy * sin2, sy * cos3, px, py].map(smooth_float).join(",")})`;
  }
  constructor(px, py, sx, sy, r) {
    super(5);
    this.sx = 1;
    this.sy = 1;
    if (px !== void 0) {
      if (px instanceof CSS_Transform2D) {
        this[0] = px[0];
        this[1] = px[1];
        this[2] = px[2];
        this[3] = px[3];
        this[4] = px[4];
      } else if (typeof px == "string")
        return ParseString(px, this);
      else {
        this[0] = px;
        this[1] = py;
        this[2] = sx;
        this[3] = sy;
        this[4] = r;
      }
    }
  }
  get type() {
    return "transform-2D";
  }
  get px() {
    return this[0];
  }
  set px(v) {
    this[0] = v;
  }
  get py() {
    return this[1];
  }
  set py(v) {
    this[1] = v;
  }
  get sx() {
    return this[2];
  }
  set sx(v) {
    this[2] = v;
  }
  get sy() {
    return this[3];
  }
  set sy(v) {
    this[3] = v;
  }
  get r() {
    return this[4];
  }
  set r(v) {
    this[4] = v;
  }
  set scale(s) {
    this.sx = s;
    this.sy = s;
  }
  get scale() {
    return this.sx;
  }
  lerp(to, t) {
    let out = new CSS_Transform2D();
    for (let i2 = 0; i2 < 5; i2++)
      out[i2] = this[i2] + (to[i2] - this[i2]) * t;
    return out;
  }
  toString() {
    return CSS_Transform2D.ToString(this);
  }
  copy(v) {
    let copy = new CSS_Transform2D(this);
    if (typeof v == "string")
      return ParseString(v, copy);
  }
  setCTX(ctx) {
    let cos3 = 1, sin2 = 0;
    if (this[4] != 0) {
      cos3 = Math.cos(this[4]);
      sin2 = Math.sin(this[4]);
    }
    ctx.transform(cos3 * this[2], -sin2 * this[2], this[3] * sin2, this[3] * cos3, this[0], this[1]);
  }
  getLocalX(X) {
    return (X - this.px) / this.sx;
  }
  getLocalY(Y) {
    return (Y - this.py) / this.sy;
  }
};
var CSS_Transform3D = class extends Float64Array {
  static FromCSS_Transform2D(transform) {
    if (transform instanceof CSS_Transform3D)
      return transform;
    return new CSS_Transform3D(transform);
  }
  static ToString(pos = [0, 0, 1, 1, 0, 0, 0, 0, 1]) {
    var cX = 0, cY = 0, cZ = 0, sX = 0, sY = 0, sZ = 0, sx = 0, sy = 0, sz = 0, px = 0, py = 0, pz = 0, sr1 = 0, sr2 = 0, sr3 = 0, sr4 = 0, sr5 = 0, sr6 = 0, sr7 = 0, sr8 = 0, sr9 = 0;
    px = pos[0];
    py = pos[1];
    pz = pos[7];
    sx = pos[2];
    sy = pos[3];
    sz = pos[8];
    cX = cos2(pos[5]);
    sX = sin(pos[5]);
    cY = cos2(pos[6]);
    sY = sin(pos[6]);
    cZ = cos2(pos[4]);
    sZ = sin(pos[4]);
    sr1 = cZ * cY * sx;
    sr4 = (cZ * sY * sX - sZ * cX) * sx;
    sr7 = (cZ * sY * sX + sZ * sX) * sx;
    sr2 = sZ * cY * sy;
    sr5 = (sZ * sY * sX + cZ * cX) * sy;
    sr8 = (sZ * sY * cX - cZ * sX) * sy;
    sr3 = -sY * sz;
    sr6 = cY * sX * sz;
    sr9 = cX * cY * sz;
    return `matrix3d(${[sr1, sr2, sr3, 0, sr4, sr5, sr6, 0, sr7, sr8, sr9, 0, px, py, pz, 1].map(smooth_float).join(",")})`;
  }
  get px() {
    return this[0];
  }
  set px(v) {
    this[0] = v;
  }
  get py() {
    return this[1];
  }
  set py(v) {
    this[1] = v;
  }
  get pz() {
    return this[7];
  }
  set pz(v) {
    this[7] = v;
  }
  get sx() {
    return this[2];
  }
  set sx(v) {
    this[2] = v;
  }
  get sy() {
    return this[3];
  }
  set sy(v) {
    this[3] = v;
  }
  set r(v) {
    this.rx = 0;
    this.ry = 0;
    this.rz = v;
  }
  get r() {
    return this.rz;
  }
  get rx() {
    return this[5];
  }
  set rx(v) {
    this[5] = v;
  }
  get ry() {
    return this[6];
  }
  set ry(v) {
    this[6] = v;
  }
  get rz() {
    return this[4];
  }
  set rz(v) {
    this[4] = v;
  }
  set scale(s) {
    this.sx = s;
    this.sy = s;
  }
  get scale() {
    return this.sx;
  }
  constructor(px = 0, py = 0, pz = 0, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) {
    super(9);
    if (px instanceof CSS_Transform2D) {
      const transform = px;
      px = transform.px;
      py = transform.py;
    } else if (typeof px == "string")
      return ParseString(px, this);
    this[0] = px;
    this[1] = py;
    this[2] = sx;
    this[3] = sy;
    this[4] = rz;
    this[5] = rx;
    this[6] = ry;
    this[7] = pz;
    this[8] = sz;
  }
  lerp(to, t) {
    let out = new CSS_Transform3D();
    for (let i2 = 0; i2 < 9; i2++)
      out[i2] = this[i2] + (to[i2] - this[i2]) * t;
    return out;
  }
  toString() {
    return CSS_Transform3D.ToString(this);
  }
  copy(v) {
    let copy = new CSS_Transform3D();
    if (typeof v == "string")
      ParseString(v, copy);
    return copy;
  }
};

// node_modules/@candlelib/css/build/types/path.js
var PathSym = {
  M: 0,
  m: 1,
  L: 2,
  l: 3,
  h: 4,
  H: 5,
  V: 6,
  v: 7,
  C: 8,
  c: 9,
  S: 10,
  s: 11,
  Q: 12,
  q: 13,
  T: 14,
  t: 15,
  A: 16,
  a: 17,
  Z: 18,
  z: 19,
  pairs: 20
};
function getSignedNumber(lex) {
  let mult = 1, tx = lex.tx;
  if (tx == "-") {
    mult = -1;
    tx = lex.n.tx;
  }
  lex.next();
  return parseFloat(tx) * mult;
}
function getNumberPair(lex, array) {
  let x = getSignedNumber(lex);
  if (lex.ch == ",")
    lex.next();
  let y = getSignedNumber(lex);
  array.push(x, y);
}
function parseNumberPairs(lex, array) {
  while ((lex.ty == lex.types.num || lex.ch == "-") && !lex.END) {
    array.push(PathSym.pairs);
    getNumberPair(lex, array);
  }
}
var CSS_Path = class extends Array {
  static FromString(string, array) {
    let lex = wind_default(string);
    lex.USE_EXTENDED_NUMBER_TYPES = true;
    while (!lex.END) {
      let relative = false, x = 0, y = 0;
      switch (lex.ch) {
        case "m":
          relative = true;
        case "M":
          lex.next();
          array.push(relative ? PathSym.m : PathSym.M);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "h":
          relative = true;
        case "H":
          lex.next();
          x = getSignedNumber(lex);
          array.push(relative ? PathSym.h : PathSym.H, x);
          continue;
        case "v":
          relative = true;
        case "V":
          lex.next();
          y = getSignedNumber(lex);
          array.push(relative ? PathSym.v : PathSym.V, y);
          continue;
        case "l":
          relative = true;
        case "L":
          lex.next();
          array.push(relative ? PathSym.l : PathSym.L);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "c":
          relative = true;
        case "C":
          lex.next();
          array.push(relative ? PathSym.c : PathSym.C);
          getNumberPair(lex, array);
          getNumberPair(lex, array);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "s":
          relative = true;
        case "S":
          lex.next();
          array.push(relative ? PathSym.s : PathSym.S);
          getNumberPair(lex, array);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "q":
          relative = true;
        case "Q":
          lex.next();
          array.push(relative ? PathSym.q : PathSym.Q);
          getNumberPair(lex, array);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "t":
          relative = true;
        case "T":
          lex.next();
          array.push(relative ? PathSym.t : PathSym.T);
          getNumberPair(lex, array);
          parseNumberPairs(lex, array);
          continue;
        case "z":
          relative = true;
        case "Z":
          array.push(relative ? PathSym.z : PathSym.Z);
      }
      lex.next();
    }
  }
  static ToString(array) {
    let string = [], l = array.length, i2 = 0;
    while (i2 < l) {
      switch (array[i2++]) {
        case PathSym.M:
          string.push("M", array[i2++], array[i2++]);
          break;
        case PathSym.m:
          string.push("m", array[i2++], array[i2++]);
          break;
        case PathSym.L:
          string.push("L", array[i2++], array[i2++]);
          break;
        case PathSym.l:
          string.push("l", array[i2++], array[i2++]);
          break;
        case PathSym.h:
          string.push("h", array[i2++]);
          break;
        case PathSym.H:
          string.push("H", array[i2++]);
          break;
        case PathSym.V:
          string.push("V", array[i2++]);
          break;
        case PathSym.v:
          string.push("v", array[i2++]);
          break;
        case PathSym.C:
          string.push("C", array[i2++], array[i2++], array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.c:
          string.push("c", array[i2++], array[i2++], array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.S:
          string.push("S", array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.s:
          string.push("s", array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.Q:
          string.push("Q", array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.q:
          string.push("q", array[i2++], array[i2++], array[i2++], array[i2++]);
          break;
        case PathSym.T:
          string.push("T", array[i2++], array[i2++]);
          break;
        case PathSym.t:
          string.push("t", array[i2++], array[i2++]);
          break;
        case PathSym.Z:
          string.push("Z");
          break;
        case PathSym.z:
          string.push("z");
          break;
        case PathSym.pairs:
          string.push(array[i2++], array[i2++]);
          break;
        case PathSym.A:
        case PathSym.a:
        default:
          i2++;
      }
    }
    return string.join(" ");
  }
  constructor(data) {
    super();
    if (typeof data == "string") {
      CSS_Path.FromString(data, this);
    } else if (Array.isArray(data)) {
      for (let i2 = 0; i2 < data.length; i2++) {
        this.push(parseFloat(data[i2]));
      }
    }
  }
  copy(value) {
    return new CSS_Path(value);
  }
  toString() {
    return CSS_Path.ToString(this);
  }
  lerp(to, t, array = new CSS_Path(to)) {
    let l = Math.min(this.length, to.length);
    for (let i2 = 0; i2 < l; i2++)
      array[i2] = this[i2] + (to[i2] - this[i2]) * t;
    return array;
  }
};

// node_modules/@candlelib/css/build/types/font_name.js
var CSS_FontName = class extends String {
  static parse(l) {
    if (l.ty == l.types.str) {
      let tx = l.tx;
      l.next();
      return new CSS_String(tx);
    }
    if (l.ty == l.types.id) {
      let pk = l.peek();
      while (pk.type == l.types.id && !pk.END) {
        pk.next();
      }
      let str = pk.slice(l);
      l.sync();
      return new CSS_String(str);
    }
    return null;
  }
};

// node_modules/@candlelib/css/build/types/rectangle.js
var CSS_Rectangle = class {
  constructor(top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
  static parse(lex) {
    let t, l, b, r;
    if (lex.tx == "rect" && lex.next().tx == "(") {
      lex.next();
      t = lex.text == "auto" ? new CSS_Length(0, "%") : CSS_Length.parse(lex);
      if (t) {
        if (lex.next().tx == ",")
          lex.next();
        r = lex.text == "auto" ? new CSS_Length(100, "%") : CSS_Length.parse(lex);
        if (r) {
          if (lex.next().tx == ",")
            lex.next();
          b = lex.text == "auto" ? new CSS_Length(100, "%") : CSS_Length.parse(lex);
          if (b) {
            if (lex.next().tx == ",")
              lex.next();
            l = lex.text == "auto" ? new CSS_Length(0, "%") : CSS_Length.parse(lex);
            if (lex.text == ")") {
              lex.next();
              return new CSS_Rectangle(t, r, b, l);
            }
          }
        }
      }
    }
    return null;
  }
  copy(other) {
    return new CSS_Rectangle(this.top, this.right, this.bottom, this.left);
  }
  toString() {
    return `rect(${[this.top, this.right, this.bottom, this.left].join(",")})`;
  }
};

// node_modules/@candlelib/css/build/properties/property_and_type_definitions.js
var types = {
  color: CSS_Color,
  flex: CSS_Length,
  length_: CSS_Length,
  time_: CSS_Length,
  angle_: CSS_Length,
  frequency_: CSS_Length,
  percentage_: CSS_Percentage,
  number_: CSS_Number,
  integer_: CSS_Number,
  resolution: CSS_Length,
  url: CSS_URL,
  uri: CSS_URL,
  image: CSS_URL,
  id: CSS_Id,
  string: CSS_String,
  shape: CSS_Shape,
  cubic_bezier: CSS_Bezier,
  gradient: CSS_Gradient,
  linear_gradient: CSS_Gradient,
  transform3D: CSS_Transform3D,
  transform2D: CSS_Transform2D,
  path: CSS_Path,
  rect: CSS_Rectangle,
  fontname: CSS_FontName,
  m_width: CSS_Media_handle("w", 0),
  m_min_width: CSS_Media_handle("w", 1),
  m_max_width: CSS_Media_handle("w", 2),
  m_height: CSS_Media_handle("h", 0),
  m_min_height: CSS_Media_handle("h", 1),
  m_max_height: CSS_Media_handle("h", 2),
  m_device_width: CSS_Media_handle("dw", 0),
  m_min_device_width: CSS_Media_handle("dw", 1),
  m_max_device_width: CSS_Media_handle("dw", 2),
  m_device_height: CSS_Media_handle("dh", 0),
  m_min_device_height: CSS_Media_handle("dh", 1),
  m_max_device_height: CSS_Media_handle("dh", 2)
};
var property_definitions = {
  direction: "ltr|rtl",
  unicode_bidi: "normal|embed|isolate|bidi-override|isolate-override|plaintext",
  writing_mode: "horizontal-tb|vertical-rl|vertical-lr",
  text_orientation: "mixed|upright|sideways",
  glyph_orientation_vertical: `auto|0deg|90deg|0|90`,
  text_combine_upright: "none|all",
  position: "static|relative|absolute|sticky|fixed",
  top: `<length>|<percentage>|<number>|auto`,
  left: `<length>|<percentage>|<number>|auto`,
  bottom: `<length>|<percentage>|<number>|auto`,
  right: `<length>|<percentage>|<number>|auto`,
  offset_before: `<length>|<percentage>|auto`,
  offset_after: `<length>|<percentage>|auto`,
  offset_start: `<length>|<percentage>|auto`,
  offset_end: `<length>|<percentage>|auto`,
  z_index: "auto|<integer>",
  display: `[ <display_outside> || <display_inside> ] | <display_listitem> | <display_internal> | <display_box> | <display_legacy>`,
  filter: `none|<filter_value_list>`,
  filter_value_list: `[<filter_function>|<url>]+`,
  filter_function: `<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue_rotate()>|<invert()>|<opacity()>|<sepia()>|<saturate()>`,
  backdrop_filter: `<filter_value_list>`,
  margin: `[<length>|<percentage>|0|auto]{1,4}`,
  margin_top: `<length>|<percentage>|0|auto`,
  margin_right: `<length>|<percentage>|0|auto`,
  margin_bottom: `<length>|<percentage>|0|auto`,
  margin_left: `<length>|<percentage>|0|auto`,
  margin_trim: "none|in-flow|all",
  padding: `[<length>|<percentage>|0|auto]{1,4}`,
  padding_top: `<length>|<percentage>|0|auto`,
  padding_right: `<length>|<percentage>|0|auto`,
  padding_bottom: `<length>|<percentage>|0|auto`,
  padding_left: `<length>|<percentage>|0|auto`,
  float: `left|right|none`,
  clear: `left|right|both|none`,
  box_sizing: `content-box | border-box`,
  width: `<length>|<percentage>|min-content|max-content|fit-content|auto`,
  height: `<length>|<percentage>|min-content|max-content|fit-content|auto`,
  min_width: `<length>|<percentage>|min-content|max-content|fit-content|auto`,
  max_width: `<length>|<percentage>|min-content|max-content|fit-content|auto|none`,
  min_height: `<length>|<percentage>|min-content|max-content|fit-content|auto`,
  max_height: `<length>|<percentage>|min-content|max-content|fit-content|auto|none`,
  color: `<color>|<gradient>`,
  opacity: `<alphavalue>`,
  background_color: `<color>`,
  background_image: `<bg_image>#`,
  background_repeat: `<repeat_style>#`,
  background_attachment: `scroll|fixed|local`,
  background_position: `<background_position_x>||<background_position_y>`,
  background_position_x: `<length_percentage>|left|center|right`,
  background_position_y: `<length_percentage>|top|center|bottom`,
  background_clip: `<box>#|text`,
  background_origin: `<box>#`,
  background_size: `<bg_size>#`,
  background: `<final_bg_layer>#`,
  border_color: `<color>{1,4}`,
  border_top_color: `<color>`,
  border_right_color: `<color>`,
  border_bottom_color: `<color>`,
  border_left_color: `<color>`,
  border_top_width: `<line_width>`,
  border_right_width: `<line_width>`,
  border_bottom_width: `<line_width>`,
  border_left_width: `<line_width>`,
  border_width: `<line_width>{1,4}`,
  border_style: `<line_style>{1,4}`,
  border_top_style: `<line_style>`,
  border_right_style: `<line_style>`,
  border_bottom_style: `<line_style>`,
  border_left_style: `<line_style>`,
  border_top: `<line_width>||<line_style>||<color>`,
  border_right: `<line_width>||<line_style>||<color>`,
  border_bottom: `<line_width>||<line_style>||<color>`,
  border_left: `<line_width>||<line_style>||<color>`,
  border_radius: `<length_percentage>{1,4}`,
  border_top_left_radius: `<length_percentage>{1,2}`,
  border_top_right_radius: `<length_percentage>{1,2}`,
  border_bottom_right_radius: `<length_percentage>{1,2}`,
  border_bottom_left_radius: `<length_percentage>{1,2}`,
  border: `<line_width>||<line_style>||<color>|none`,
  border_image: `<border_image_source>||<border_image_slice>[/<border_image_width>|/<border_image_width>?/<border_image_outset>]?||<border_image_repeat>`,
  border_image_source: `none|<image>`,
  border_image_slice: `[<number>|<percentage>]{1,4}&&fill?`,
  border_image_width: `[<length_percentage>|<number>|auto]{1,4}`,
  border_image_outset: `[<length>|<number>]{1,4}`,
  border_image_repeat: `[stretch|repeat|round|space]{1,2}`,
  box_shadow: `none|<shadow>#`,
  line_height: `normal|<percentage>|<length>|<number>`,
  overflow_x: "visible|hidden|scroll|auto",
  overflow_y: "visible|hidden|scroll|auto",
  overflow: "visible|hidden|scroll|auto",
  font_display: "auto|block|swap|fallback|optional",
  font_family: `[<generic_family>|<family_name>]#`,
  font_language_override: "normal|<string>",
  font: `[[<font_style>||<font_variant>||<font_weight>]?<font_size>[/<line_height>]?<font_family>]|caption|icon|menu|message-box|small-caption|status-bar`,
  font_max_size: `<absolute_size>|<relative_size>|<length>|<percentage>|infinity`,
  font_min_size: `<absolute_size>|<relative_size>|<length>|<percentage>`,
  font_optical_sizing: `auto|none`,
  font_pallette: `normal|light|dark|<identifier>`,
  font_size: `<absolute_size>|<relative_size>|<length>|<percentage>`,
  font_stretch: "<percentage>|normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
  font_style: `normal|italic|oblique<angle>?`,
  font_synthesis: "none|[weight||style]",
  font_synthesis_small_caps: "auto|none",
  font_synthesis_style: "auto|none",
  font_synthesis_weight: "auto|none",
  font_variant_alternates: "normal|[stylistic(<feature-value-name>)||historical-forms||styleset(<feature-value-name>#)||character-variant(<feature-value-name>#)||swash(<feature-value-name>)||ornaments(<feature-value-name>)||annotation(<feature-value-name>)]",
  font_variant_emoji: "auto|text|emoji|unicode",
  font_variation_settings: " normal|[<string><number>]#",
  font_size_adjust: `<number>|none`,
  font_weight: `normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900`,
  font_kerning: ` auto | normal | none`,
  font_variant: `normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby||[sub|super]]`,
  font_variant_ligatures: `normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values> ]`,
  font_variant_position: `normal|sub|super`,
  font_variant_caps: `normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps`,
  font_variant_numeric: "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]",
  font_variant_east_asian: " normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]",
  hanging_punctuation: "none|[first||[force-end|allow-end]||last]",
  hyphens: "none|manual|auto",
  letter_spacing: `normal|<length>`,
  line_break: "auto|loose|normal|strict|anywhere",
  overflow_wrap: "normal|break-word|anywhere",
  tab_size: "<length>|<number>",
  text_align: "start|end|left|right|center|justify|match-parent|justify-all",
  text_align_all: "start|end|left|right|center|justify|match-parent",
  text_align_last: "auto|start|end|left|right|center|justify|match-parent",
  text_indent: "[[<length>|<percentage>]&&hanging?&&each-line?]",
  text_justify: "auto|none|inter-word|inter-character",
  text_transform: "none|[capitalize|uppercase|lowercase]||full-width||full-size-kana",
  white_space: "normal|pre|nowrap|pre-wrap|break-spaces|pre-line",
  word_break: " normal|keep-all|break-all|break-word",
  word_spacing: "normal|<length>",
  word_wrap: "  normal | break-word | anywhere",
  text_decoration: "<text-decoration-line>||<text-decoration-style>||<color>",
  text_decoration_color: "<color>",
  text_decoration_line: "none|[underline||overline||line-through||blink]",
  text_decoration_style: "solid|double|dotted|dashed|wavy",
  text_emphasis: "<text-emphasis-style>||<text-emphasis-color>",
  text_emphasis_color: "<color>",
  text_emphasis_position: "[over|under]&&[right|left]?",
  text_emphasis_style: "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
  text_shadow: "none|[<color>?&&<length>{2,3}]#",
  text_underline_position: "auto|[under||[left|right]]",
  align_content: `flex-start | flex-end | center | space-between | space-around | stretch`,
  align_items: `flex-start | flex-end | center | baseline | stretch`,
  align_self: `auto | flex-start | flex-end | center | baseline | stretch`,
  flex: `none|[<flex-grow> <flex-shrink>?||<flex-basis>]`,
  flex_basis: `content|<width>`,
  flex_direction: `row | row-reverse | column | column-reverse`,
  flex_flow: `<flex-direction>||<flex-wrap>`,
  flex_grow: `<number>`,
  flex_shrink: `<number>`,
  flex_wrap: `nowrap|wrap|wrap-reverse`,
  justify_content: "flex-start | flex-end | center | space-between | space-around | space-evenly",
  justify_items: "auto|normal | stretch | flex-start | flex-end | center | self-start | self-end | left | right | end | start",
  order: `<integer>`,
  transition: `<single_transition>#`,
  transition_delay: `<time>#`,
  transition_duration: `<time>#`,
  transition_property: `none|<single_transition_property>#`,
  transition_timing_function: `<timing_function>#`,
  animation: `<single_animation>#`,
  animation_name: `[none|<keyframes_name>]#`,
  animation_duration: `<time>#`,
  animation_timing_function: `<timing_function>#`,
  animation_iteration_count: `<single_animation_iteration_count>#`,
  animation_direction: `<single_animation_direction>#`,
  animation_play_state: `<single_animation_play_state>#`,
  animation_delayed: `<time>#`,
  animation_fill_mode: `<single_animation_fill_mode>#`,
  pointer_events: `visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|none|auto`,
  user_select: "none|auto|text|contain|all",
  caret_color: "auto|<color>",
  cursor: "[[<url> [<number><number>]?,]*[auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|grab|grabbing|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out]]",
  outline: "[<outline-color>||<outline-style>||<outline-width>]",
  outline_color: "<color>|invert",
  outline_offset: "<length>",
  outline_style: "auto|<border-style>",
  outline_width: "<line-width>",
  resize: "none|both|horizontal|vertical",
  text_overflow: "clip|ellipsis",
  bookmark_label: "<content-list>",
  bookmark_level: "none|<integer>",
  bookmark_state: "open|closed",
  quotes: "none|[<string><string>]+",
  string_set: "none|[<custom-ident><string>+]#",
  caption_side: "top|bottom",
  table_layout: "auto|fixed",
  border_collapse: "collapse|separate",
  border_spacing: "<length><length>?",
  empty_cells: "show|hide",
  page_break_before: "auto|always|avoid|left|right",
  page_break_after: "auto|always|avoid|left|right",
  page_break_inside: "auto|avoid|left|right",
  orphans: "<integer>",
  widows: "<integer>",
  counter_set: "[<custom-ident> <integer>?]+|none",
  list_style: "<list-style-type>||<list-style-position>||<list-style-image>",
  list_style_image: "<url>|none",
  list_style_position: "inside|outside",
  list_style_type: "<counter-style>|<string>|none",
  marker_side: "list-item|list-container",
  vertical_align: `baseline|sub|super|top|text-top|middle|bottom|text-bottom|<percentage>|<length>`,
  transform: "<transform2D>|none",
  perspective: "<length>|none",
  transform_origin: "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]]<length>?",
  visibility: `visible|hidden|collapse`,
  content: `normal|none|[<string>|<uri>|<counter>|attr(<id>)|open-quote|close-quote|no-open-quote|no-close-quote]+`,
  quotas: `[<string><string>]+|none`,
  counter_reset: `[<identifier><integer>?]+|none`,
  counter_increment: `[<identifier><integer>?]+|none`,
  grid: "<grid-template>|<grid-template-rows>/[auto-flow && dense?]<grd-auto-columns>?|[auto-flow && dense?]<grid-auto-rows>?/<grid-template-columns>",
  grid_area: "<grid-line>[/<grid-line>]{0,3}",
  grid_auto_columns: "<track-size>+",
  grid_auto_rows: "<track-size>+",
  grid_auto_flow: "[row|column]||dense",
  grid_column: "<grid-line>[/<grid-line>]?",
  grid_column_end: "<grid-line>",
  grid_column_start: "<grid-line>",
  grid_row: "<grid-line>[/<grid-line>]?",
  grid_row_end: "<grid-line>",
  grid_row_start: "<grid-line>",
  grid_template: "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?",
  grid_template_areas: "none | <string>+",
  grid_template_columns: "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
  grid_template_rows: "none | <track-list> | <auto-track-list> | subgrid <line-name-list>?",
  clip: "<rect>|auto"
};
var virtual_property_definitions = {
  calc: "calc(<calc_sum>)",
  grid_line: "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
  track_list: "[<line-names>?[<track-size>|<track-repeat>]]+<line-names>?",
  auto_track_list: "[<line-names>?[<fixed-size>|<fixed-repeat>]]*<line-names>?<auto-repeat>",
  explicit_track_list: "[<line-names>?<track-size>]+<line-names>?",
  line_name_list: "[<line-names>|<name-repeat>]+",
  track_size: "<track-breadth>|minmax(<inflexible-breadth>,<track-breadth>)|fit-content(<length-percentage>)",
  fixed_size: "<fixed-breadth>|minmax(<fixed-breadth>,<track-breadth>)|minmax(<inflexible-breadth>,<fixed-breadth>)",
  track_breadth: " <length-percentage> | <flex> | min-content | max-content | auto",
  inflexible_breadth: "<length-percentage> | min-content | max-content | auto",
  fixed_breadth: "<length-percentage>",
  line_names: "[<custom-ident>*]",
  track_repeat: "repeat",
  auto_repeat: "repeat",
  fixed_repeat: "repeat",
  name_repeat: "repeat",
  counter_style: `<numeric_counter_style>|<alphabetic_counter_style>|<symbolic_counter_style>|<japanese_counter_style>|<korean_counter_style>|<chinese_counter_style>|ethiopic-numeric`,
  numeric_counter_style: `decimal|decimal-leading-zero|arabic-indic|armenian|upper-armenian|lower-armenian|bengali|cambodian|khmer|cjk-decimal|devanagari|georgian|gujarati|gurmukhi|hebrew|kannada|lao|malayalam|mongolian|myanmar|oriya|persian|lower-roman|upper-roman|tamil|telugu|thai|tibetan`,
  symbolic_counter_style: `disc|circle|square|disclosure-open|disclosure-closed`,
  alphabetic_counter_style: `lower-alpha|lower-latin|upper-alpha|upper-latin|cjk-earthly-branch|cjk-heavenly-stem|lower-greek|hiragana|hiragana-iroha|katakana|katakana-iroha`,
  japanese_counter_style: `japanese-informal|japanese-formal`,
  korean_counter_style: `korean-hangul-formal|korean-hanja-informal|and korean-hanja-formal`,
  chinese_counter_style: `simp-chinese-informal|simp-chinese-formal|trad-chinese-informal|and trad-chinese-formal`,
  content_list: "[<string>|contents|<image>|<quote>|<target>|<leader()>]+",
  content_replacement: "<image>",
  position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>][top|center|bottom|<length-percentage>]?|[[left|right]<length-percentage>]&&[[top|bottom]<length-percentage>]]",
  east_asian_variant_values: "[jis78|jis83|jis90|jis04|simplified|traditional]",
  alphavalue: "<number>",
  box: `border-box|padding-box|content-box`,
  absolute_size: `xx-small|x-small|small|medium|large|x-large|xx-large`,
  relative_size: `larger|smaller`,
  final_bg_layer: `<background_color>||<bg_image>||<bg_position>[/<bg_size>]?||<repeat_style>||<attachment>||<box>||<box>`,
  bg_image: `<url>|<gradient>|none`,
  repeat_style: `repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}`,
  background_attachment: `<attachment>#`,
  bg_size: `[<length_percentage>|auto]{1,2}|cover|contain`,
  bg_position: `[top|center|bottom|<percentage>|<length>]||[left|center|right|<percentage>|<length>]`,
  attachment: `scroll|fixed|local`,
  line_style: `none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset`,
  line_width: `thin|medium|thick|<length>`,
  shadow: `inset?<length>{2,4}&&<color>?`,
  family_name: `<fontname>`,
  generic_family: `serif|sans-serif|cursive|fantasy|monospace`,
  identifier: `<id>`,
  custom_ident: `<id>`,
  timing_function: `linear|<cubic_bezier_timing_function>|<step_timing_function>|<frames_timing_function>`,
  cubic_bezier_timing_function: `<cubic_bezier>`,
  step_timing_function: `step-start|step-end|'steps()'`,
  frames_timing_function: `'frames()'`,
  single_animation_fill_mode: `none|forwards|backwards|both`,
  single_animation_play_state: `running|paused`,
  single_animation_direction: `normal|reverse|alternate|alternate-reverse`,
  single_animation_iteration_count: `infinite|<number>`,
  single_transition_property: `all|<custom_ident>`,
  single_transition: `[none|<single_transition_property>]||<time>||<timing_function>||<time>`,
  single_animation: `<time>||<timing_function>||<time>||<single_animation_iteration_count>||<single_animation_direction>||<single_animation_fill_mode>||<single_animation_play_state>||[none|<keyframes_name>]`,
  keyframes_name: `<string>`,
  time: "<time_>|<calc>",
  angle: "<angle_>|<calc>",
  frequency: "<frequency_>|<calc>",
  length: "<length_>|<calc>",
  percentage: "<percentage_>|<calc>",
  number: "<number_>|<calc>",
  integer: "<integer_>|<calc>",
  length_percentage: `<length>|<percentage>`,
  frequency_percentage: `<frequency>|<percentage>`,
  angle_percentage: `<angle>|<percentage>`,
  time_percentage: `<time>|<percentage>`,
  number_percentage: `<percentage>|<number>`,
  clip_path: `<clip_source>|[<basic_shape>||<geometry_box>]|none`,
  clip_source: `<url>`,
  shape_box: `<box>|margin-box`,
  geometry_box: `<shape_box>|fill-box|stroke-box|view-box`,
  basic_shape: `<CSS_Shape>`,
  ratio: `<integer>/<integer>`,
  common_lig_values: `[ common-ligatures | no-common-ligatures ]`,
  discretionary_lig_values: `[ discretionary-ligatures | no-discretionary-ligatures ]`,
  historical_lig_values: `[ historical-ligatures | no-historical-ligatures ]`,
  contextual_alt_values: `[ contextual | no-contextual ]`,
  display_outside: `block | inline | run-in`,
  display_inside: `flow | flow-root | table | flex | grid | ruby`,
  display_listitem: `<display_outside>? && [ flow | flow-root ]? && list-item`,
  display_internal: `table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container`,
  display_box: `contents | none`,
  display_legacy: `inline-block | inline-table | inline-flex | inline-grid`
};

// node_modules/@candlelib/css/build/properties/productions.js
function checkDefaults(lx) {
  const tx = lx.tx;
  switch (lx.tx) {
    case "initial":
    case "inherit":
    case "unset":
    case "revert":
      if (!lx.pk.pk.END)
        return 0;
      return 1;
  }
  ;
  return 2;
}
var JUX = class {
  constructor() {
    this.id = JUX.step++;
    this.r = [NaN, NaN];
    this.terms = [];
    this.HAS_PROP = false;
    this.name = "";
    this.REQUIRE_COMMA = false;
  }
  get type() {
    return "jux";
  }
  mergeValues(existing_v, new_v) {
    if (existing_v)
      if (existing_v.v) {
        if (Array.isArray(existing_v.v))
          existing_v.v.push(new_v.v);
        else {
          existing_v.v = [existing_v.v, new_v.v];
        }
      } else
        existing_v.v = new_v.v;
  }
  sp(value, out_val) {
    if (this.HAS_PROP) {
      if (value)
        if (Array.isArray(value) && value.length === 1 && Array.isArray(value[0]))
          out_val[0] = value[0];
        else
          out_val[0] = value;
    }
  }
  isRepeating() {
    return !(isNaN(this.r[0]) && isNaN(this.r[1]));
  }
  parse(data) {
    const prop_data = [];
    this.parseLVL1(data instanceof wind_default.constructor ? data : wind_default(data + ""), prop_data);
    return prop_data;
  }
  checkForComma(lx, out_val, temp_val = [], j2 = 0) {
    if (this.REQUIRE_COMMA) {
      if (out_val) {
        if (j2 > 0)
          out_val.push(",", ...temp_val);
        else
          out_val.push(...temp_val);
      }
      if (lx.ch !== ",")
        return false;
      lx.next();
    } else if (out_val)
      out_val.push(...temp_val);
    return true;
  }
  parseLVL1(lx, out_val = [], ROOT = true) {
    if (typeof lx == "string")
      lx = wind_default(lx);
    let bool = false;
    if (ROOT) {
      switch (checkDefaults(lx)) {
        case 1:
          this.sp(lx.tx, out_val);
          return true;
        case 0:
          return false;
      }
      bool = this.parseLevel2(lx, out_val, this.start, this.end);
    } else
      bool = this.parseLevel2(lx, out_val, this.start, this.end);
    return bool;
  }
  parseLevel2(lx, out_val, start, end) {
    let bool = false, top_copy = lx.copy(), temp_val = [], j2 = 0;
    repeat:
      for (j2 = 0; j2 < end && !top_copy.END; j2++) {
        const copy = top_copy.copy(), temp = [];
        for (let i2 = 0, l = this.terms.length; i2 < l; i2++) {
          const term = this.terms[i2];
          if (!term.parseLVL1(copy, temp, false)) {
            if (!term.OPTIONAL) {
              break repeat;
            }
          }
        }
        top_copy.sync(copy);
        bool = true;
        if (!this.checkForComma(top_copy, temp_val, temp, j2)) {
          j2++;
          break;
        }
      }
    if (j2 < start) {
      return false;
    }
    out_val.push(...temp_val);
    lx.sync(top_copy);
    return bool;
  }
  get start() {
    return isNaN(this.r[0]) ? 1 : this.r[0];
  }
  set start(e) {
  }
  get end() {
    return isNaN(this.r[1]) ? 1 : this.r[1];
  }
  set end(e) {
  }
  get OPTIONAL() {
    return this.r[0] === 0;
  }
  set OPTIONAL(a) {
  }
};
JUX.step = 0;
var AND = class extends JUX {
  get type() {
    return "and";
  }
  parseLevel2(lx, out_val, start, end) {
    const PROTO = new Array(this.terms.length), l = this.terms.length;
    let bool = false;
    repeat:
      for (let j2 = 0; j2 < end && !lx.END; j2++) {
        const matched = PROTO.fill(0), copy = lx.copy(), temp_val = [];
        and:
          while (!copy.END) {
            for (let i2 = 0; i2 < l; i2++) {
              if (matched[i2] === 2)
                continue;
              let term = this.terms[i2];
              const temp = [];
              if (!term.parseLVL1(copy, temp, false)) {
                if (term.OPTIONAL)
                  matched[i2] = 1;
                else
                  matched[i2] = 0;
              } else {
                temp_val.push(...temp);
                matched[i2] = 2;
                continue and;
              }
            }
            if (matched.reduce((a, v) => a * v, 1) === 0)
              break repeat;
            break;
          }
        lx.sync(copy);
        bool = true;
        if (!this.checkForComma(copy, out_val, temp_val, j2))
          break;
      }
    return bool;
  }
};
var OR = class extends JUX {
  get type() {
    return "or";
  }
  parseLevel2(lx, out_val, start, end) {
    const PROTO = new Array(this.terms.length), l = this.terms.length;
    let bool = false, NO_HIT = true;
    repeat:
      for (let j2 = 0; j2 < end && !lx.END; j2++) {
        const matched = PROTO.fill(0), copy = lx.copy(), temp_val = [];
        or:
          while (!copy.END) {
            for (let i2 = 0; i2 < l; i2++) {
              if (matched[i2] === 2)
                continue;
              let term = this.terms[i2];
              if (term.parseLVL1(copy, temp_val, false)) {
                NO_HIT = false;
                matched[i2] = 2;
                continue or;
              }
            }
            if (NO_HIT)
              break repeat;
            break;
          }
        bool = true;
        lx.sync(copy);
        if (!this.checkForComma(copy, out_val, temp_val, j2))
          break;
      }
    return bool;
  }
};
OR.step = 0;
var ONE_OF = class extends JUX {
  get type() {
    return "one_of";
  }
  parseLevel2(lx, out_val, start, end) {
    let BOOL = false;
    for (let j2 = 0; j2 < end && !lx.END; j2++) {
      let bool = false;
      const copy = lx.copy();
      let temp_val = [];
      for (const term of this.terms) {
        temp_val.length = 0;
        if (term.parseLVL1(copy, temp_val, false)) {
          bool = true;
          break;
        }
      }
      if (!bool)
        break;
      lx.sync(copy);
      BOOL = true;
      if (!this.checkForComma(copy, out_val, temp_val, j2))
        break;
    }
    return BOOL;
  }
};
ONE_OF.step = 0;

// node_modules/@candlelib/css/build/properties/terms.js
function getExtendedIdentifier(l) {
  const IWS = l.IWS;
  l.IWS = false;
  let pk = l.pk;
  let id2 = "";
  while (!pk.END && pk.ty != pk.types.ws && (pk.ty & (wind_default.types.id | wind_default.types.num) || pk.tx == "-" || pk.tx == "_"))
    pk.next();
  id2 = pk.slice(l).trim();
  l.sync();
  l.tl = 0;
  l.IWS = IWS;
  return id2;
}
var LiteralTerm = class {
  constructor(lex) {
    if (typeof lex == "string")
      lex = new Lexer(lex);
    let value = getExtendedIdentifier(lex);
    if (lex.type == lex.types.string)
      value = value.slice(1, -1);
    this.value = value;
    this.HAS_PROP = false;
  }
  get type() {
    return "term";
  }
  seal() {
  }
  parse(data) {
    const prop_data = [];
    this.parseLVL1(data instanceof wind_default.constructor ? data : wind_default(data + ""), prop_data);
    return prop_data;
  }
  parseLVL1(l, r, root2 = true) {
    if (typeof l == "string")
      l = wind_default(l);
    if (root2) {
      switch (checkDefaults(l)) {
        case 1:
          r.push(l.tx);
          return true;
        case 0:
          return false;
      }
    }
    const cp = l.copy();
    const v = getExtendedIdentifier(cp);
    if (v == this.value) {
      l.sync(cp);
      l.tl = 0;
      l.next();
      r.push(this.value);
      return true;
    }
    return false;
  }
  get OPTIONAL() {
    return false;
  }
  set OPTIONAL(a) {
  }
};
var ValueTerm = class extends LiteralTerm {
  constructor(value, getPropertyParser2, definitions, productions) {
    if (value instanceof JUX)
      return value;
    super(wind_default(value));
    this.value = null;
    const IS_VIRTUAL = { is: false };
    if (typeof value == "string")
      var u_value = value.replace(/\-/g, "_");
    if (!(this.value = types[u_value]))
      this.value = getPropertyParser2(u_value, IS_VIRTUAL, definitions, productions);
    if (!this.value)
      return new LiteralTerm(value);
    if (this.value instanceof JUX) {
      return this.value;
    }
    if (this.value instanceof LiteralTerm)
      return this.value;
  }
  parseLVL1(l, r, ROOT = true) {
    if (typeof l == "string")
      l = wind_default(l);
    if (ROOT) {
      switch (checkDefaults(l)) {
        case 1:
          r.push(l.tx);
          return true;
        case 0:
          return false;
      }
    }
    const v = this.value.parse(l);
    if (v || v === 0) {
      if (Array.isArray(v))
        r.push(...v);
      else
        r.push(v);
      return true;
    } else
      return false;
  }
};
var FunctionTerm = class extends LiteralTerm {
  constructor(lex) {
    super(lex);
    while (lex.ch != ")" && !lex.END)
      lex.next();
  }
  parseLVL1(l, rule, root2 = true) {
    if (typeof l == "string")
      l = wind_default(l);
    const r = [];
    if (super.parseLVL1(l, r, root2)) {
      const cp = l.copy();
      while (cp.ch != ")" && !cp.END)
        cp.next();
      cp.next();
      rule.push(r[0] + cp.slice(l).trim());
      l.sync(cp);
      return true;
    }
    return false;
  }
};
var SymbolTerm = class extends LiteralTerm {
  parseLVL1(l, rule, r) {
    if (typeof l == "string")
      l = wind_default(l);
    if (l.tx == this.value) {
      l.next();
      rule.push(this.value);
      return true;
    }
    return false;
  }
};

// node_modules/@candlelib/css/build/properties/construct_property_parser.js
var standard_productions = {
  JUX,
  AND,
  OR,
  ONE_OF,
  LiteralTerm,
  ValueTerm,
  SymbolTerm,
  FunctionTerm
};
function getExtendedIdentifier2(l) {
  const IWS = l.IWS;
  l.IWS = false;
  let pk = l.pk;
  let id2 = "";
  while (!pk.END && pk.ty != pk.types.ws && (pk.ty & (wind_default.types.id | wind_default.types.num) || pk.tx == "-" || pk.tx == "_"))
    pk.next();
  id2 = pk.slice(l).trim();
  l.sync();
  l.tl = 0;
  l.IWS = IWS;
  return id2;
}
function getPropertyParser(property_name, IS_VIRTUAL = { is: false }, definitions = null, productions = standard_productions) {
  let parser_val = definitions[property_name];
  if (parser_val) {
    if (typeof parser_val == "string")
      parser_val = definitions[property_name] = ConstructPropertyParser(parser_val, property_name, definitions, productions);
    if (parser_val)
      parser_val.name = property_name;
    return parser_val;
  }
  if (!definitions.__virtual)
    definitions.__virtual = Object.assign({}, virtual_property_definitions);
  parser_val = definitions.__virtual[property_name];
  if (parser_val) {
    IS_VIRTUAL.is = true;
    if (typeof parser_val == "string") {
      parser_val = definitions.__virtual[property_name] = ConstructPropertyParser(parser_val, "", definitions, productions);
      if (parser_val) {
        parser_val.name = property_name;
      }
    }
    return parser_val;
  }
  return null;
}
function ConstructPropertyParser(notation, name2, definitions, productions) {
  const lex = wind_default(notation);
  lex.USE_EXTENDED_ID = true;
  lex.tl = 0;
  lex.next();
  let n = define(lex, definitions, productions);
  return n;
}
function define(l, definitions, productions, super_term = false, oneof_group = false, or_group = false, and_group = false, important = null) {
  let term, nt, v;
  const { JUX: JUX2, AND: AND2, OR: OR2, ONE_OF: ONE_OF2, LiteralTerm: LiteralTerm2, ValueTerm: ValueTerm2, SymbolTerm: SymbolTerm2, FunctionTerm: FunctionTerm2 } = productions;
  while (!l.END) {
    switch (l.ch) {
      case "]":
        return term;
      case "[":
        v = define(l.next(), definitions, productions, true);
        l.assert("]");
        v = checkForExtensions(l, v, productions);
        if (term) {
          if (term instanceof JUX2 && term.isRepeating())
            term = foldIntoProduction(productions, new JUX2(), term);
          term = foldIntoProduction(productions, term, v);
        } else
          term = v;
        break;
      case "<":
        let id2 = getExtendedIdentifier2(l.next());
        v = new ValueTerm2(id2, getPropertyParser, definitions, productions);
        l.next().assert(">");
        v = checkForExtensions(l, v, productions);
        if (term) {
          if (term instanceof JUX2)
            term = foldIntoProduction(productions, new JUX2(), term);
          term = foldIntoProduction(productions, term, v);
        } else {
          term = v;
        }
        break;
      case "&":
        if (l.pk.ch == "&") {
          if (and_group)
            return term;
          nt = new AND2();
          if (!term)
            throw new Error("missing term!");
          nt.terms.push(term);
          l.sync().next();
          while (!l.END) {
            nt.terms.push(define(l, definitions, productions, super_term, oneof_group, or_group, true, important));
            if (l.ch !== "&" || l.pk.ch !== "&")
              break;
            l.a("&").a("&");
          }
          return nt;
        }
        break;
      case "|": {
        if (l.pk.ch == "|") {
          if (or_group || and_group)
            return term;
          nt = new OR2();
          nt.terms.push(term);
          l.sync().next();
          while (!l.END) {
            nt.terms.push(define(l, definitions, productions, super_term, oneof_group, true, and_group, important));
            if (l.ch !== "|" || l.pk.ch !== "|")
              break;
            l.a("|").a("|");
          }
          return nt;
        } else {
          if (oneof_group || or_group || and_group)
            return term;
          nt = new ONE_OF2();
          nt.terms.push(term);
          l.next();
          while (!l.END) {
            nt.terms.push(define(l, definitions, productions, super_term, true, or_group, and_group, important));
            if (l.ch !== "|")
              break;
            l.a("|");
          }
          return nt;
        }
      }
      default:
        if (l.pk.ch == "(") {
          v = new FunctionTerm2(l, (lex) => define(lex, definitions, productions));
        } else
          v = l.ty == l.types.symbol ? new SymbolTerm2(l) : new LiteralTerm2(l);
        l.next();
        v = checkForExtensions(l, v, productions);
        if (term) {
          if (term instanceof JUX2)
            term = foldIntoProduction(productions, new JUX2(), term);
          term = foldIntoProduction(productions, term, v);
        } else {
          term = v;
        }
    }
  }
  return term;
}
function checkForExtensions(l, term, productions) {
  outer:
    while (true) {
      switch (l.ch) {
        case "{":
          term = foldIntoProduction(productions, term);
          term.r[0] = parseInt(l.next().tx);
          if (l.next().ch == ",") {
            l.next();
            if (l.pk.ch == "}") {
              term.r[1] = parseInt(l.tx);
              l.next();
            } else {
              term.r[1] = Infinity;
            }
          } else
            term.r[1] = term.r[0];
          l.a("}");
          break;
        case "*":
          term = foldIntoProduction(productions, term);
          term.r[0] = 0;
          term.r[1] = Infinity;
          l.next();
          break;
        case "+":
          term = foldIntoProduction(productions, term);
          term.r[0] = 1;
          term.r[1] = Infinity;
          l.next();
          break;
        case "?":
          term = foldIntoProduction(productions, term);
          term.r[0] = 0;
          term.r[1] = 1;
          l.next();
          break;
        case "#":
          let nr = new productions.JUX();
          nr.terms.push(term);
          term = nr;
          term.r[0] = 1;
          term.r[1] = Infinity;
          term.REQUIRE_COMMA = true;
          l.next();
          if (l.ch == "{") {
            term.r[0] = parseInt(l.next().tx);
            term.r[1] = parseInt(l.next().a(",").tx);
            l.next().a("}");
          }
          break;
      }
      break;
    }
  return term;
}
function foldIntoProduction(productions, term, new_term = null) {
  if (term) {
    if (!(term instanceof productions.JUX)) {
      let nr = new productions.JUX();
      nr.terms.push(term);
      term = nr;
    }
    if (new_term)
      term.terms.push(new_term);
    return term;
  }
  return new_term;
}

// node_modules/@candlelib/css/build/properties/parse_property_value.js
function parsePropertyDefinitionFromHydrocarbon(env, sym, pos) {
  if (sym.length == 0)
    return null;
  let prop = null;
  const rule_name = sym[0], body_string = sym[2].trim(), important = sym[3] ? true : false, IS_VIRTUAL = { is: false };
  const parser = getPropertyParser(rule_name.replace(/\-/g, "_"), IS_VIRTUAL, property_definitions);
  if (parser && !IS_VIRTUAL.is) {
    if (body_string == "unset" || body_string == "inherit" || body_string == "initial" || body_string == "revert")
      return new CSSProperty(rule_name, body_string, [new CSS_String(body_string)], important, pos);
    const lex = wind_default(body_string);
    lex.USE_EXTENDED_ID = true;
    lex.tl = 0;
    lex.next();
    prop = parser.parse(lex);
    return new CSSProperty(rule_name, body_string, prop, important, pos);
  } else {
    console.warn(`Unable to get parser for CSS property ${rule_name}`);
    const prop2 = new CSSProperty(rule_name, body_string, null, important, pos);
    prop2.VALID = false;
    return prop2;
  }
}
function parseProperty(name2, value, important) {
  return parsePropertyDefinitionFromHydrocarbon(void 0, [name2, , value, important], void 0);
}

// node_modules/@candlelib/spark/build/spark.js
var caller = typeof window == "object" && window?.requestAnimationFrame ? window.requestAnimationFrame : (f) => {
  setTimeout(f, 5);
};
var perf = typeof performance == "undefined" ? { now: () => Date.now() } : performance;
var Spark = class {
  constructor() {
    this.update_queue_a = [];
    this.update_queue_b = [];
    this.update_queue = this.update_queue_a;
    this.queue_switch = 0;
    this.callback = this.update.bind(this);
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("load", () => {
        caller(this.callback);
      });
    } else {
      this.callback = this.update.bind(this);
      caller(this.callback);
    }
    this.frame_time = perf.now();
    this.SCHEDULE_PENDING = false;
    this.ACTIVE_UPDATE = false;
  }
  queueUpdate(object, time_start = 1, time_end = 0, NOW = false) {
    if (NOW && this.ACTIVE_UPDATE) {
      if (object._SCHD_ == 1)
        return;
      if (this.queue_switch == 1)
        this.update_queue_a.push(object);
      else
        this.update_queue_b.push(object);
    } else {
      const IsInt = typeof object._SCHD_ == "number";
      if (IsInt && object._SCHD_ > 0)
        if (this.SCHEDULE_PENDING)
          return;
        else
          return caller(this.callback);
      object._SCHD_ = (time_start & 65535 | time_end << 16) << 1;
      this.update_queue.push(object);
      this.frame_time = perf.now() | 0;
      if (!this.SCHEDULE_PENDING) {
        this.SCHEDULE_PENDING = true;
        caller(this.callback);
      }
    }
  }
  removeFromQueue(object) {
    if (object._SCHD_) {
      for (let i2 = 0, l = this.update_queue.length; i2 < l; i2++)
        if (this.update_queue[i2] === object) {
          this.update_queue.splice(i2, 1);
          object._SCHD_ = 0;
          if (l == 1)
            this.SCHEDULE_PENDING = false;
          return;
        }
    }
  }
  update() {
    this.SCHEDULE_PENDING = false;
    this.ACTIVE_UPDATE = true;
    const uq = this.update_queue, time = perf.now() | 0, diff = Math.ceil(time - this.frame_time) | 1, step_ratio = diff * 0.06;
    this.frame_time = time;
    if (this.queue_switch == 0)
      this.update_queue = this.update_queue_b, this.queue_switch = 1;
    else
      this.update_queue = this.update_queue_a, this.queue_switch = 0;
    for (let i2 = 0, l = uq.length, o = uq[0]; i2 < uq.length; o = uq[++i2]) {
      let schd = o._SCHD_ >> 1, timestart = (schd & 65535) - diff, timeend = schd >> 16 & 65535;
      o._SCHD_ = 0;
      if (timestart > 0) {
        this.queueUpdate(o, timestart, timeend);
        continue;
      }
      timestart = 0;
      if (timeend > 0)
        this.queueUpdate(o, timestart, timeend - diff);
      try {
        o.scheduledUpdate(step_ratio, diff);
      } catch (e) {
        this.handleError(e);
      }
    }
    this.ACTIVE_UPDATE = false;
    uq.length = 0;
  }
  handleError(e) {
    console.log("Spark: Error encountered");
    console.error(e);
  }
  async sleep(timeout = 1) {
    return new Promise((res) => {
      this.queueUpdate({
        scheduledUpdate: () => res(1)
      }, timeout);
    });
  }
};
var spark = new Spark();
var spark_default = spark;

// node_modules/@candlelib/glow/build/common_methods.js
var i = 0;
var common_methods_default = {
  duration: 0,
  await: async function() {
    return this.observeStop();
  },
  shuttle(SHUTTLE = true) {
    this.SHUTTLE = !!SHUTTLE;
    return this;
  },
  set(i2) {
    if (i2 >= 0)
      this.run(i2 * this.duration);
    else
      this.run(this.duration - i2 * this.duration);
    return this;
  },
  step(i2) {
    return this.set(i2);
  },
  play(scale = 1, from = 0) {
    if (this.duration == 0) {
      this.time = 0;
      this.scheduledUpdate(0, 1e7);
      return this;
    }
    this.PLAY = true;
    this.SCALE = scale;
    this.time = from;
    spark_default.queueUpdate(this);
    this.issueEvent("started");
    return this;
  },
  asyncPlay(scale, from) {
    this.play(scale, from);
    return this.observeStop();
  },
  stop() {
    this.PLAY = false;
    return this;
  },
  repeat(count = 1) {
    this.REPEAT = Math.max(0, +count);
    return this;
  },
  addEventListener(event, listener) {
    if (typeof listener === "function") {
      if (!this.events[event])
        this.events[event] = [];
      this.events[event].push(listener);
    }
  },
  removeEventListener(event, listener) {
    if (typeof listener === "function") {
      const events = this.events[event];
      if (events) {
        for (let i2 = 0; i2 < events.length; i2++)
          if (events[i2] === listener)
            return events.splice(i2, 1), true;
      }
    }
    return false;
  },
  issueStopped() {
    this.issueEvent("stopped");
    return this;
  },
  issueEvent(event) {
    if (this.events[event])
      this.events[event] = this.events[event].filter((e) => e(this) !== false);
  },
  observeStop() {
    return new Promise((res) => {
      if (this.duration > 0)
        this.scheduledUpdate(0, 0);
      if (this.duration < 1)
        return res();
      this.addEventListener("stopped", () => (res(), false));
    });
  },
  scheduledUpdate(a, t) {
    if (!this.PLAY)
      return;
    this.time += t * this.SCALE;
    if (this.run(this.time)) {
      if (i++ > 1e4)
        this.issueStopped();
      spark_default.queueUpdate(this);
    } else if (this.REPEAT) {
      let scale = this.SCALE;
      this.REPEAT--;
      if (this.SHUTTLE)
        scale = -scale;
      let from = scale > 0 ? 0 : this.duration;
      this.play(scale, from);
    } else {
      this.issueStopped();
    }
  },
  constructCommon() {
    this.time = 0;
    this.duration = 0;
    this.REPEAT = 0;
    this.PLAY = true;
    this.DESTROYED = false;
    this.FINISHED = false;
    this.SHUTTLE = false;
    this.SCALE = 1;
    this.events = {};
  },
  destroyCommon() {
    this.DESTROYED = true;
    this.events = null;
  }
};

// node_modules/@candlelib/glow/build/animation.js
CSSProperty.prototype.interpolate = function(old_prop, t, new_prop) {
  return null;
};
var html_element = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
var SVG__ = typeof SVGElement !== "undefined" ? SVGElement : function() {
};
var CSS_Length2 = types.length_;
var CSS_Percentage2 = types.percentage_;
var CSS_Color2 = types.color;
var CSS_Transform2D2 = types.transform2D;
var CSS_Transform3D2 = types.transform3D;
var CSS_Path2 = types.path;
var CSS_Bezier2 = types.cubic_bezier;
var CSS_String2 = types.string;
var Animation = function anim() {
  var USE_TRANSFORM = false;
  const CSS_STYLE = 0, JS_OBJECT = 1, SVG = 3;
  function setType(obj) {
    if (obj instanceof html_element)
      return CSS_STYLE;
    if (obj instanceof SVG__)
      return SVG;
    return JS_OBJECT;
  }
  const Linear = { lerp: (to, t, from = 0) => from + (to - from) * t, getYatX: (x) => x, toString: () => "linear" };
  class lerpNumber extends Number {
    lerp(to, t, from = 0) {
      return Number(this) + (to - Number(this)) * t;
    }
    copy(val) {
      return new lerpNumber(val);
    }
  }
  class lerpNonNumeric {
    constructor(v) {
      this.v = v;
    }
    lerp(to, t, from) {
      return from.v;
    }
    copy(val) {
      return new lerpNonNumeric(val);
    }
  }
  class AnimProp {
    constructor(keys, obj, prop_name, type) {
      this.duration = 0;
      this.end = false;
      this.keys = [];
      this.current_val = null;
      const IS_ARRAY = Array.isArray(keys), k0 = IS_ARRAY ? keys[0] : keys, k0_val = typeof k0.value !== "undefined" ? k0.value : k0.v;
      if (prop_name == "transform")
        this.type = CSS_Transform2D2;
      else
        this.type = this.getType(prop_name, k0_val);
      this.getValue(obj, prop_name, type, k0_val);
      let p = this.current_val;
      if (IS_ARRAY)
        keys.forEach((k) => p = this.addKey(k, p));
      else
        this.addKey(keys, p);
    }
    destroy() {
      this.keys = null;
      this.type = null;
      this.current_val = null;
    }
    getValue(obj, prop_name, type, k0_val) {
      switch (type) {
        case SVG:
          if (obj instanceof SVGPathElement) {
            if (prop_name == "d") {
              this.type = CSS_Path2;
              this.current_val = new this.type(k0_val);
            }
          }
          break;
        case CSS_STYLE:
          let name2 = prop_name.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
          let cs = window.getComputedStyle(obj);
          let value = cs.getPropertyValue(name2);
          if (!value)
            value = obj.style[prop_name];
          if (this.type == CSS_Percentage2) {
            value = parseFloat(value);
            if (obj.parentElement) {
              const pcs = window.getComputedStyle(obj.parentElement), pvalue = parseFloat(pcs.getPropertyValue(name2)), ratio = value / pvalue;
              value = ratio * 100;
            }
          }
          this.current_val = new this.type(value);
          break;
        default:
          this.current_val = new this.type(obj[prop_name]);
          break;
      }
    }
    getType(name2, value) {
      switch (typeof value) {
        case "number":
          return lerpNumber;
        case "string":
          const type = parseProperty(name2, value, false)?.val?.[0]?.constructor;
          if (!type) {
            if (CSS_Length2._verify_(value))
              return CSS_Length2;
            if (CSS_Percentage2._verify_(value))
              return CSS_Percentage2;
            if (CSS_Color2._verify_(value))
              return CSS_Color2;
          } else
            return type;
        case "object":
          return lerpNonNumeric;
      }
    }
    addKey(key, prev) {
      let l = this.keys.length, pkey = this.keys[l - 1], v = key.value !== void 0 ? key.value : key.v, own_key = {
        val: prev ? prev.copy(v) : new this.type(v) || 0,
        dur: key.duration ?? key.dur ?? 0,
        del: key.delay ?? key.del ?? 0,
        ease: key.easing ?? key.e ?? (pkey ? pkey.ease : Linear),
        len: 0
      };
      own_key.len = own_key.dur + own_key.del;
      this.keys.push(own_key);
      this.duration += own_key.len;
      return own_key.val;
    }
    getValueAtTime(time = 0) {
      let val_start = this.current_val, val_end = this.current_val, key, val_out = val_start;
      for (let i2 = 0; i2 < this.keys.length; i2++) {
        key = this.keys[i2];
        val_end = key.val;
        if (time < key.len) {
          break;
        } else
          time -= key.len;
        val_start = key.val;
      }
      if (key) {
        if (time < key.len) {
          if (time < key.del) {
            val_out = val_start;
          } else {
            let x = (time - key.del) / key.dur;
            let s = key.ease.getYatX(x);
            val_out = val_start.lerp(val_end, s, val_start);
          }
        } else {
          val_out = val_end;
        }
      }
      return val_out;
    }
    run(obj, prop_name, time, type) {
      const val_out = this.getValueAtTime(time);
      this.setProp(obj, prop_name, val_out, type);
      return time < this.duration;
    }
    setProp(obj, prop_name, value, type) {
      switch (type) {
        case CSS_STYLE:
          obj.style[prop_name] = value.toString();
          break;
        case SVG:
          obj.setAttribute(prop_name, value.toString());
          break;
        default:
          obj[prop_name] = value;
      }
    }
    unsetProp(obj, prop_name) {
      this.setProp(obj, prop_name, "", CSS_STYLE);
    }
    toCSSString(time = 0, prop_name = "") {
      const value = this.getValueAtTime(time);
      return `${prop_name}:${value.toString()}`;
    }
  }
  class AnimSequence {
    constructor(obj, props) {
      this.constructCommon();
      this.obj = null;
      this.type = setType(obj);
      this.CSS_ANIMATING = false;
      switch (this.type) {
        case CSS_STYLE:
          this.obj = obj;
          break;
        case SVG:
        case JS_OBJECT:
          this.obj = obj;
          break;
      }
      this.props = {};
      this.setProps(props);
    }
    destroy() {
      for (let name2 in this.props)
        if (this.props[name2])
          this.props[name2].destroy();
      this.obj = null;
      this.props = null;
      this.destroyCommon();
    }
    removeProps(props) {
      if (props instanceof AnimSequence)
        props = props.props;
      for (let name2 in props) {
        if (this.props[name2])
          this.props[name2] = null;
      }
    }
    unsetProps(props) {
      for (let name2 in this.props)
        this.props[name2].unsetProp(this.obj, name2);
    }
    setProps(props) {
      for (let name2 in this.props)
        this.props[name2].destroy();
      this.props = {};
      for (let name2 in props)
        this.configureProp(name2, props[name2]);
    }
    configureProp(name2, keys) {
      let prop;
      if (prop = this.props[name2]) {
        this.duration = Math.max(prop.duration || prop.dur, this.duration);
      } else {
        prop = new AnimProp(keys, this.obj, name2, this.type);
        this.props[name2] = prop;
        this.duration = Math.max(prop.duration || prop.dur, this.duration);
      }
    }
    run(i2) {
      for (let n in this.props) {
        let prop = this.props[n];
        if (prop)
          prop.run(this.obj, n, i2, this.type);
      }
      return i2 <= this.duration && i2 >= 0;
    }
    toCSSString(keyfram_id) {
      const easing = "linear";
      const strings = [`.${keyfram_id}{animation:${keyfram_id} ${this.duration}ms ${Animation.ease_out.toString()}}`, `@keyframes ${keyfram_id}{`];
      const len = 2, len_m_1 = len - 1;
      for (let i2 = 0; i2 < len; i2++) {
        strings.push(`${Math.round(i2 / len_m_1 * 100)}%{`);
        for (let name2 in this.props)
          strings.push(this.props[name2].toCSSString(i2 / len_m_1 * this.duration, name2.replace(/([A-Z])/g, (match, p1) => "-" + match.toLowerCase())) + ";");
        strings.push("}");
      }
      strings.push("}");
      return strings.join("\n");
    }
    beginCSSAnimation() {
      if (!this.CSS_ANIMATING) {
        const anim_class = "class" + (Math.random() * 1e4 | 0);
        this.CSS_ANIMATING = !!anim_class;
        this.obj.classList.add(anim_class);
        let style = document.createElement("style");
        style.innerHTML = this.toCSSString(anim_class);
        document.head.appendChild(style);
        this.style = style;
        setTimeout(this.endCSSAnimation.bind(this), this.duration);
      }
    }
    endCSSAnimation() {
      if (this.CSS_ANIMATING) {
        this.obj.classList.remove(this.CSS_ANIMATING);
        this.CSS_ANIMATING = false;
        this.style.parentElement.removeChild(this.style);
        this.style = null;
      }
    }
  }
  class AnimGroup {
    constructor(sequences) {
      this.constructCommon();
      this.seq = [];
      for (const seq of sequences)
        this.add(seq);
    }
    destroy() {
      this.seq.forEach((seq) => seq.destroy());
      this.seq = null;
      this.destroyCommon();
    }
    add(seq) {
      this.seq.push(seq);
      this.duration = Math.max(this.duration, seq.duration);
    }
    run(t) {
      for (let i2 = 0, l = this.seq.length; i2 < l; i2++) {
        let seq = this.seq[i2];
        seq.run(t);
      }
      return t < this.duration;
    }
  }
  Object.assign(AnimGroup.prototype, common_methods_default);
  Object.assign(AnimSequence.prototype, common_methods_default);
  const GlowFunction = function(...args) {
    const output = [];
    for (let i2 = 0; i2 < args.length; i2++) {
      let data = args[i2];
      let obj = data.obj;
      if (obj) {
        let props = {};
        Object.keys(data).forEach((k) => {
          if (!{ obj: true, match: true, delay: true }[k])
            props[k] = data[k];
        });
        output.push(new AnimSequence(obj, props));
      } else
        console.error(`Glow animation was passed an undefined object.`);
    }
    if (args.length > 1)
      return new AnimGroup(output);
    return output.pop();
  };
  Object.assign(GlowFunction, {
    createSequence: GlowFunction,
    createGroup: (...rest) => new AnimGroup(rest),
    set USE_TRANSFORM(v) {
      USE_TRANSFORM = !!v;
    },
    get USE_TRANSFORM() {
      return USE_TRANSFORM;
    },
    linear: Linear,
    ease: new CSS_Bezier2(0.25, 0.1, 0.25, 1),
    ease_in: new CSS_Bezier2(0.42, 0, 1, 1),
    ease_out: new CSS_Bezier2(0, 0.8, 0.8, 1),
    ease_in_out: new CSS_Bezier2(0.42, 0, 0.58, 1),
    overshoot: new CSS_Bezier2(5, 5, 0.2, 0.8),
    anticipate: new CSS_Bezier2(0.5, -0.1, 0.5, 0.8),
    custom: (x1, y1, x2, y2) => new CSS_Bezier2(x1, y1, x2, y2)
  });
  return GlowFunction;
}();

// node_modules/@candlelib/glow/build/transformto.js
var CSS_Transform2D3 = types.transform2D;
function setTo(to, seq, duration, easing, from) {
  const cs = window.getComputedStyle(to, null);
  const rect = to.getBoundingClientRect();
  const from_rect = from.getBoundingClientRect();
  let to_width = cs.getPropertyValue("width");
  let to_height = cs.getPropertyValue("height");
  let margin_left = parseFloat(cs.getPropertyValue("margin-left"));
  let to_bgc = cs.getPropertyValue("background-color");
  let to_c = cs.getPropertyValue("color");
  const pos = cs.getPropertyValue("position");
  if (false) {
    setToWithTransform(from_rect, rect, seq);
    seq.props.transform.keys[1].dur = duration;
    seq.props.transform.keys[1].len = duration;
    seq.props.transform.keys[1].ease = easing;
    seq.props.transform.duration = duration;
  } else {
    const left = seq.props.left;
    let start_left = 0, final_left = 0, abs_diff = 0;
    abs_diff = left.keys[0].val - rect.left;
    if (pos == "relative") {
      const left2 = parseFloat(cs.getPropertyValue("left")) || 0;
      start_left = abs_diff + left2;
      final_left = left2;
    } else {
      start_left = to.offsetLeft + abs_diff;
      final_left = to.offsetLeft;
    }
    left.keys[0].val = new left.type(start_left, "px");
    left.keys[1].val = new left.type(final_left, "px");
    left.keys[1].dur = duration;
    left.keys[1].len = duration;
    left.keys[1].ease = easing;
    left.duration = duration;
    const top = seq.props.top;
    let start_top = 0, final_top = 0;
    abs_diff = top.keys[0].val - rect.top;
    if (pos == "relative") {
      const top2 = parseFloat(cs.getPropertyValue("top")) || 0;
      start_top = abs_diff + top2;
      final_top = top2;
    } else {
      start_top = to.offsetTop + abs_diff;
      final_top = to.offsetTop;
    }
    top.keys[0].val = new top.type(start_top, "px");
    top.keys[1].val = new top.type(final_top, "px");
    top.keys[1].dur = duration;
    top.keys[1].len = duration;
    top.keys[1].ease = easing;
    top.duration = duration;
    seq.props.width.keys[0].val = new seq.props.width.type(to_width);
    seq.props.width.keys[0].dur = duration;
    seq.props.width.keys[0].len = duration;
    seq.props.width.keys[0].ease = easing;
    seq.props.width.duration = duration;
    seq.props.height.keys[0].val = new seq.props.height.type(to_height);
    seq.props.height.keys[0].dur = duration;
    seq.props.height.keys[0].len = duration;
    seq.props.height.keys[0].ease = easing;
    seq.props.height.duration = duration;
  }
  to.style.transformOrigin = "top left";
  seq.props.backgroundColor.keys[0].val = new seq.props.backgroundColor.type(to_bgc);
  seq.props.backgroundColor.keys[0].dur = duration;
  seq.props.backgroundColor.keys[0].len = duration;
  seq.props.backgroundColor.keys[0].ease = easing;
  seq.props.backgroundColor.duration = duration;
  seq.props.color.keys[0].val = new seq.props.color.type(to_c);
  seq.props.color.keys[0].dur = duration;
  seq.props.color.keys[0].len = duration;
  seq.props.color.keys[0].ease = easing;
  seq.props.color.duration = duration;
  seq.obj = to;
  seq.addEventListener("stopped", () => {
    seq.unsetProps();
  });
}
function TransformTo(element_from, element_to, duration = 500, easing = Animation.linear, HIDE_OTHER = false) {
  let rect = element_from.getBoundingClientRect();
  let cs = window.getComputedStyle(element_from, null);
  let margin_left = parseFloat(cs.getPropertyValue("margin"));
  let seq = Animation.createSequence({
    obj: element_from,
    width: { value: "0px" },
    height: { value: "0px" },
    backgroundColor: { value: "rgb(1,1,1)" },
    color: { value: "rgb(1,1,1)" },
    left: [{ value: rect.left + "px" }, { value: "0px" }],
    top: [{ value: rect.top + "px" }, { value: "0px" }]
  });
  if (!element_to) {
    let a = (seq2) => (element_to2, duration2 = 500, easing2 = Animation.linear, HIDE_OTHER2 = false) => {
      setTo(element_to2, seq2, duration2, easing2, element_from);
      seq2.duration = duration2;
      return seq2;
    };
    return a(seq);
  }
  setTo(element_to, duration, easing, element_from);
  seq.duration = duration;
  return seq;
}

// node_modules/@candlelib/glow/build/transitioneer.js
var obj_map = new Map();
var in_delay = 0;
function $in(...data) {
  let seq = null, length = data.length, delay = 0;
  if (typeof data[length - 1] == "number")
    delay = +data[length - 1], length--;
  for (let i2 = 0; i2 < length; i2++) {
    let anim_data = data[i2];
    if (typeof anim_data == "object") {
      if (anim_data.match && this.TT[anim_data.match]) {
        let duration = anim_data.duration, easing = anim_data.easing;
        seq = this.TT[anim_data.match](anim_data.obj, duration, easing);
      } else
        seq = Animation.createSequence(anim_data);
      if (seq) {
        this.in_seq.push(seq);
        this.in_duration = Math.max(this.in_duration, seq.duration);
        if (this.OVERRIDE) {
          if (obj_map.get(seq.obj)) {
            let other_seq = obj_map.get(seq.obj);
            other_seq.removeProps(seq);
          }
          obj_map.set(seq.obj, seq);
        }
      }
    }
  }
  this.in_duration = Math.max(this.in_duration, delay);
  return this.in;
}
function $out(...data) {
  let length = data.length, delay = 0;
  if (typeof data[length - 1] == "number") {
    if (typeof data[length - 2] == "number") {
      in_delay = data[length - 2];
      delay = data[length - 1];
      length -= 2;
    } else
      delay = data[length - 1], length--;
  }
  for (let i2 = 0; i2 < length; i2++) {
    let anim_data = data[i2];
    if (typeof anim_data == "object") {
      if (anim_data.match) {
        this.TT[anim_data.match] = TransformTo(anim_data.obj);
      } else {
        let seq = Animation.createSequence(anim_data);
        if (seq) {
          this.out_seq.push(seq);
          this.out_duration = Math.max(this.out_duration, seq.duration);
          if (this.OVERRIDE) {
            if (obj_map.get(seq.obj)) {
              let other_seq = obj_map.get(seq.obj);
              other_seq.removeProps(seq);
            }
            obj_map.set(seq.obj, seq);
          }
        }
        this.in_delay = Math.max(this.in_delay, +delay);
      }
    }
  }
}
var TransitionClass = class {
  constructor(override = true) {
    this.constructCommon();
    this.in_duration = 0;
    this.out_duration = 0;
    this.in_delay = 0;
    this.in_seq = [];
    this.out_seq = [];
    this.TT = {};
    this.out = $out.bind(this);
    this.out.addEventListener = this.addEventListener.bind(this);
    this.out.removeEventListener = this.removeEventListener.bind(this);
    this.in = $in.bind(this);
    this.in.addEventListener = this.addEventListener.bind(this);
    this.in.removeEventListener = this.removeEventListener.bind(this);
    Object.defineProperty(this.out, "out_duration", {
      get: () => this.out_duration
    });
    this.OVERRIDE = override;
  }
  constructCommon() {
  }
  destroyCommon() {
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  destroy() {
    let removeProps = function(seq) {
      if (!seq.DESTROYED) {
        if (obj_map.get(seq.obj) == seq)
          obj_map.delete(seq.obj);
      }
      seq.destroy();
    };
    this.in_seq.forEach(removeProps);
    this.out_seq.forEach(removeProps);
    this.in_seq.length = 0;
    this.out_seq.length = 0;
    this.out = null;
    this.in = null;
    this.destroyCommon();
  }
  get duration() {
    return Math.max(this.in_duration + this.in_delay, this.out_duration);
  }
  set duration(e) {
  }
  run(t) {
    for (let i2 = 0; i2 < this.out_seq.length; i2++) {
      let seq = this.out_seq[i2];
      if (!seq.run(t) && !seq.FINISHED) {
        seq.issueEvent("stopped");
        seq.FINISHED = true;
      }
    }
    const in_t = Math.max(t - this.in_delay, 0);
    for (let i2 = 0; i2 < this.in_seq.length; i2++) {
      let seq = this.in_seq[i2];
      if (!seq.run(t) && !seq.FINISHED) {
        seq.issueEvent("stopped");
        seq.FINISHED = true;
      }
    }
    return t <= this.duration && t >= 0;
  }
};
Object.assign(TransitionClass.prototype, common_methods_default);
var Transitioneer = { createTransition: (OVERRIDE = false) => new TransitionClass(OVERRIDE) };

// node_modules/@candlelib/glow/build/glow.js
var Glow = Object.assign(Animation, {
  createTransition: Transitioneer.createTransition,
  transformTo: TransformTo
});
var glow_default = Glow;

// ../../lib_candlelib_2022/packages/wick/source/typescript/entry/wick-runtime.ts
var wick_runtime_exports = {};
__export(wick_runtime_exports, {
  default: () => wick_runtime_default,
  gatherWickElements: () => gatherWickElements
});

// ../../lib_candlelib_2022/packages/uri/build/uri.js
var fetch_reference2 = typeof window !== "undefined" ? window.fetch : null;
var uri_reg_ex2 = /(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:\/\/))?(?:([a-zA-Z][\dA-Za-z\+\.\-]*)(?:\:([^\<\>\:\?\[\]\@\/\#\b\s]*)?)?\@)?(?:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|((?:\[[0-9a-f]{1,4})+(?:\:[0-9a-f]{0,4}){2,7}\])|([^\<\>\:\?\[\]\@\/\#\b\s\.]{2,}(?:\.[^\<\>\:\?\[\]\@\/\#\b\s]*)*))?(?:\:(\d+))?((?:[^\?\[\]\#\s\b]*)+)?(?:\?([^\[\]\#\s\b]*))?(?:\#([^\#\s\b]*))?/i;
var root_reg2 = /^\/|^\w+\:|^\\\\/;
var relative_regex2 = /^(\.+\/)|^w/;
var double_forward_regex2 = /\/\//g;
var isPOSIX2 = (() => {
  if ("process" in globalThis)
    return process.platform !== "win32";
  return true;
})();
var STOCK_LOCATION2 = {
  protocol: "",
  host: "",
  port: "",
  path: "",
  hash: "",
  query: "",
  search: "",
  hostname: "",
  pathname: ""
};
var fetch_not_found_error_message2 = `'fetch' function is not defined`;
function getCORSModes2(uri) {
  const IS_CORS = URI2.GLOBAL.host !== uri.host && !!uri.host;
  return {
    IS_CORS,
    mode: IS_CORS ? "cors" : "same-origin",
    credentials: IS_CORS ? "omit" : "include"
  };
}
function fetchLocalText2(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference2)
      throw new Error(fetch_not_found_error_message2);
    fetch_reference2(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes2(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.text().then(res);
    }).catch((e) => rej(e));
  });
}
function fetchLocalJSON2(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference2)
      throw new Error(fetch_not_found_error_message2);
    fetch_reference2(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes2(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.json().then(rej);
      else
        r.json().then(res).catch(rej);
    }).catch((e) => rej(e));
  });
}
function fetchLocalBuffer2(uri, m = "cors") {
  return new Promise((res, rej) => {
    if (!fetch_reference2)
      throw new Error(fetch_not_found_error_message2);
    fetch_reference2(uri + "", Object.assign({
      method: "GET"
    }, getCORSModes2(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.arrayBuffer().then(res).catch(rej);
    }).catch((e) => rej(e));
  });
}
function submitForm2(uri, form_data, m = "same-origin") {
  return new Promise((res, rej) => {
    var form;
    if (form_data instanceof FormData)
      form = form_data;
    else {
      form = new FormData();
      for (let name2 in form_data)
        form.append(name2, form_data[name2] + "");
    }
    if (!fetch_reference2)
      throw new Error(fetch_not_found_error_message2);
    fetch_reference2(uri + "", Object.assign({
      method: "POST",
      body: form
    }, getCORSModes2(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.text().then(rej);
      else
        r.json().then(res);
    }).catch((e) => e.text().then(rej));
  });
}
function submitJSON2(uri, json_data) {
  const data = JSON.stringify(json_data);
  return new Promise((res, rej) => {
    if (!fetch_reference2)
      throw new Error(fetch_not_found_error_message2);
    fetch_reference2(uri + "", Object.assign({
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }, getCORSModes2(uri))).then((r) => {
      if (r.status < 200 || r.status > 299)
        r.json().then(rej);
      else
        r.json().then(res);
    }).catch((e) => e.text().then(rej));
  });
}
function toWindowsPath2(path) {
  return path.replace(/\//g, "\\");
}
function toPosixPath2(path) {
  return path.replace(/\\/g, "/");
}
var URI2 = class {
  constructor(uri = "", USE_LOCATION = false) {
    this.protocol = "";
    this.user = "";
    this.pwd = "";
    this.host = "";
    this.port = 0;
    this.path = "";
    this.query = "";
    this.hash = "";
    this.map = null;
    let IS_STRING = true, IS_LOCATION = false, location2 = typeof document !== "undefined" ? document.location : STOCK_LOCATION2;
    if (typeof Location !== "undefined" && uri instanceof Location) {
      location2 = uri;
      uri = "";
      IS_LOCATION = true;
    }
    if ((!uri || typeof uri != "string") && !(uri instanceof URI2)) {
      IS_STRING = false;
      IS_LOCATION = true;
      if (URI2.GLOBAL && USE_LOCATION)
        return URI2.GLOBAL;
    }
    if (uri instanceof URI2) {
      this.protocol = uri.protocol;
      this.user = uri.user;
      this.pwd = uri.pwd;
      this.host = uri.host;
      this.port = uri.port;
      this.path = toPosixPath2(uri.path.replace(double_forward_regex2, "/"));
      this.query = uri.query;
      this.hash = uri.hash;
    } else if (IS_STRING) {
      let part = uri.match(uri_reg_ex2);
      if (!part || part[0] !== uri)
        return new URI2("localhost");
      this.protocol = part[1] || (USE_LOCATION ? location2.protocol : "");
      this.user = part[2] || "";
      this.pwd = part[3] || "";
      this.host = part[4] || part[5] || part[6] || (USE_LOCATION ? location2.hostname : "");
      this.port = parseInt(part[7]) || (USE_LOCATION ? parseInt(location2.port) : 0);
      this.path = toPosixPath2((part[8] || (USE_LOCATION ? location2.pathname : "")).replace(double_forward_regex2, "/"));
      this.query = part[9] || (USE_LOCATION ? location2.search.slice(1) : "");
      this.hash = part[10] || (USE_LOCATION ? location2.hash.slice(1) : "");
    } else if (IS_LOCATION && location2) {
      this.protocol = location2.protocol.replace(/\:/g, "");
      this.host = location2.hostname;
      this.port = parseInt(location2.port);
      this.path = toPosixPath2(location2.pathname.replace(double_forward_regex2, "/"));
      this.hash = location2.hash.slice(1);
      this.query = location2.search.slice(1);
      this._getQuery_();
      if (USE_LOCATION) {
        URI2.GLOBAL = this;
        return URI2.GLOBAL;
      }
    }
    this._getQuery_();
  }
  static resolveRelative(URL_or_url_new, URL_or_url_original = URI2.GLOBAL ? URI2.GLOBAL : typeof document != "undefined" && typeof document.location != "undefined" ? document.location.toString() : "") {
    const URL_old = new URI2(URL_or_url_original), URL_new = new URI2(URL_or_url_new);
    if (!(URL_old + "") || !(URL_new + ""))
      return null;
    if (URL_new.IS_RELATIVE) {
      let old = URL_old.path.split("/").slice(0, -1);
      let nw = URL_new.path.split("/");
      for (let i2 = 0; i2 < nw.length; i2++) {
        switch (nw[i2].replace(/\.\.+/g, "..")) {
          case ".":
            old.splice(old.length - 1, 0);
            break;
          case "..":
            old.splice(old.length - 1, 1);
            break;
          default:
            old.push(nw[i2]);
        }
      }
      URL_new.path = old.join("/").replace(/\/\//g, "/");
    }
    return URL_new;
  }
  async fetch(init) {
    return fetch_reference2 ? fetch_reference2(this + "", init) : createResponse2("", this + "");
  }
  static addProtocolHandler() {
  }
  _getQuery_() {
    if (this.query) {
      const data = this.query.split(/(?<!\\)\&/g).map((s) => s.split("="));
      this.map = new Map(data);
    }
  }
  setPath(path) {
    this.path = path;
    return this;
  }
  setLocation() {
    history.replaceState({}, "replaced state", `${this}`);
  }
  async DOES_THIS_EXIST() {
    return true;
  }
  toString() {
    let str = [];
    if (this.host) {
      if (this.protocol)
        str.push(`${this.protocol}://`);
      str.push(`${this.host}`);
    }
    if (this.port)
      str.push(`:${this.port}`);
    if (this.path) {
      const path = `${this.IS_RELATIVE || this.IS_ROOT ? "" : "/"}${this.path}`.replace(/\/\//g, "/");
      if (isPOSIX2)
        str.push(toPosixPath2(path));
      else
        str.push(toWindowsPath2(path));
    }
    if (this.query)
      str.push((this.query[0] == "?" ? "" : "?") + this.query);
    if (this.hash)
      str.push("#" + this.hash);
    return str.join("");
  }
  getData() {
    const data = {};
    if (this.map)
      for (const [key, val] of this.map.entries()) {
        if (!val)
          data[key] = true;
        else
          data[key] = val;
      }
    return data;
  }
  setData(data) {
    const query_string = [];
    for (const name2 in data) {
      const val = data[name2];
      if (typeof val == "boolean") {
        if (val)
          query_string.push(name2);
      } else
        query_string.push(`${name2}=${val.toString()}`);
    }
    this.query = (query_string.length > 0 ? "?" + query_string.join("&") : "").replace(/\ +/g, "%20");
    return this;
  }
  fetchText() {
    return fetchLocalText2(this).then((res) => (URI2.RC.set(this.path, res), res));
  }
  fetchJSON() {
    return fetchLocalJSON2(this).then((res) => (URI2.RC.set(this.path, res), res));
  }
  fetchBuffer() {
    return fetchLocalBuffer2(this).then((res) => (URI2.RC.set(this.path, res), res));
  }
  submitForm(form_data) {
    return submitForm2(this, form_data);
  }
  submitJSON(json_data, mode) {
    return submitJSON2(this, json_data);
  }
  goto() {
    return;
  }
  get file() {
    return this.path.split("/").pop() ?? "";
  }
  get filename() {
    return this.file.split(".").shift() ?? "";
  }
  get dir() {
    return (this.path.split("/").slice(0, -1).join("/") + "/").replace(/\/\//g, "/");
  }
  get pathname() {
    return this.path;
  }
  get href() {
    return this.toString();
  }
  get ext() {
    const m = this.file.match(/\.([^\.]*)$/);
    return m ? m[1] : "";
  }
  set ext(ext) {
    ext = "." + ext.replace(/\./g, "");
    const current_ext = this.ext;
    if (current_ext)
      this.path = this.path.replace("." + current_ext, ext);
    else
      this.path += ext;
  }
  get search() {
    return this.query;
  }
  get IS_RELATIVE() {
    return relative_regex2.test(this.path);
  }
  get IS_ROOT() {
    return !!root_reg2.test(this.path);
  }
  static getEXEURL(imp) {
    let str = imp.url ?? "";
    const exe_url = new URI2(str);
    if (exe_url.protocol == "file") {
      exe_url.protocol = "";
    } else if (exe_url.protocol != "")
      return exe_url;
    return new URI2(exe_url);
  }
  static getCWDURL() {
    return URI2.GLOBAL;
  }
  getRelativeTo(goal) {
    const to = new URI2(goal);
    if (to.IS_RELATIVE || this.IS_RELATIVE)
      return to;
    const pathA = this.dir.split("/").filter((s) => !!s && s !== ".");
    const pathB = to.dir.split("/").filter((s) => !!s && s !== ".");
    let indiceA = 0, indiceB = 0, max = pathA.length - 1;
    let out_path = [];
    let i2 = 0;
    while (i2 < pathB.length && pathA.length && pathB[i2] == pathA[i2]) {
      i2++;
    }
    out_path.push(...pathA.slice(i2).map((_) => ".."), ...pathB.slice(i2));
    let path = out_path.join("/");
    if (path[0] !== ".")
      path = "./" + path;
    const file = to.file;
    to.path = path + (file ? "/" + file : "");
    return to;
  }
  isSUBDIRECTORY_OF(candidate_parent) {
    if (candidate_parent.IS_RELATIVE)
      return false;
    const own_path = (this.IS_RELATIVE ? URI2.resolveRelative(this, candidate_parent) || new URI2() : this).dir.split("/").slice(0, -1), candidate_path = candidate_parent.dir.split("/").slice(0, -1);
    if (candidate_path.length >= own_path.length)
      return false;
    for (let i2 = 0; i2 < candidate_path.length; i2++)
      if (candidate_path[i2] !== own_path[i2])
        return false;
    return true;
  }
};
URI2.RC = new Map();
URI2.GLOBAL = typeof location != "undefined" ? new URI2(location) : new URI2();
var SIMDATA2 = null;
URI2.simulate = function() {
  SIMDATA2 = new Map();
  URI2.prototype.fetchText = async (d) => (d = this.toString(), SIMDATA2.get(d)) ? SIMDATA2.get(d) : "";
  URI2.prototype.fetchJSON = async (d) => (d = this.toString(), SIMDATA2.get(d)) ? JSON.parse(SIMDATA2.get(d).toString()) : {};
};
URI2.addResource = (n, v) => n && v && (SIMDATA2 || (SIMDATA2 = new Map())) && SIMDATA2.set(n.toString(), v.toString);
var POLYFILLED2 = false;
URI2.server = typeof globalThis["process"] == "undefined" ? async () => {
} : async function(root_dir) {
  root_dir = root_dir || process.cwd() + "/";
  try {
    const fsr = await import("fs");
    const fs = fsr.promises;
    const path = await import("path");
    const http = await import("http");
    if (typeof global !== "undefined" && !POLYFILLED2) {
      POLYFILLED2 = true;
      URI2.GLOBAL = new URI2(root_dir);
      const g = global;
      g.document = g.document || {};
      g.document.location = URI2.GLOBAL;
      g.location = URI2.GLOBAL;
      const cached = URI2.resolveRelative;
      URI2.resolveRelative = function(new_url, old_url = URI2.GLOBAL) {
        let URL_old = new URI2(old_url), URL_new = new URI2(new_url);
        if (!URL_new.IS_RELATIVE && !URL_new.IS_ROOT) {
          const base_path = URL_old.path.split("/").filter((s) => s !== ".."), new_path = URL_new + "";
          let i2 = base_path.length;
          while (i2-- >= 1) {
            try {
              var search_path;
              if (base_path[i2] == "node_modules")
                search_path = new URI2([...base_path.slice(0, i2 + 1), new_path].join("/"));
              else {
                search_path = new URI2([...base_path.slice(0, i2 + 1), "node_modules", new_path].join("/"));
              }
              const stats = fsr.statSync(search_path + "");
              if (stats)
                return new URI2(search_path + "");
            } catch (e) {
            }
          }
          return URL_new;
        }
        return cached(URL_new, URL_old);
      };
      fetch_reference2 = g.fetch = async (uri, data) => {
        if (data?.IS_CORS) {
          return new Promise((res, rej) => {
            try {
              http.get(uri, data, (req) => {
                let body = "";
                req.setEncoding("utf8");
                req.on("data", (d) => {
                  body += d;
                });
                req.on("end", () => res(createResponse2(body, uri + "")));
              });
            } catch (e) {
              rej(e);
            }
          });
        } else {
          try {
            let p = path.resolve(process.cwd(), "" + uri);
            const body = await fs.readFile(p);
            return createResponse2(body, uri + "");
          } catch (err) {
            throw err;
          }
        }
      };
      URI2.prototype.DOES_THIS_EXIST = async function() {
        if (!this.IS_RELATIVE)
          return !!await fs.stat(this.toString()).catch((e) => false);
        return false;
      };
    }
  } catch (e) {
    console.error("Unable to load URI.server. Is this package running on a browser?");
    return;
  }
};
Object.freeze(URI2.RC);
Object.seal(URI2);
var uri_default2 = URI2;
function createResponse2(body, url) {
  return {
    get type() {
      return "basic";
    },
    get ok() {
      return true;
    },
    get bodyUsed() {
      return true;
    },
    get redirected() {
      return false;
    },
    get status() {
      return 200;
    },
    get statusText() {
      return "200";
    },
    get headers() {
      return null;
    },
    get body() {
      return Uint8Array.from(body);
    },
    get trailer() {
      return (async () => null)();
    },
    get url() {
      return url;
    },
    clone() {
      return createResponse2(body, url);
    },
    formData: () => null,
    text: async () => body instanceof Buffer ? body.toString("utf8") : body,
    json: async () => JSON.parse(body instanceof Buffer ? body.toString("utf8") : body),
    arrayBuffer: async () => body instanceof Buffer ? body.buffer : Buffer.from(body)
  };
}

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/plugin.ts
var PLUGIN_TYPE;
(function(PLUGIN_TYPE2) {
  PLUGIN_TYPE2["ELEMENT_RENDER"] = "element-render-hook";
  PLUGIN_TYPE2["STATIC_DATA_FETCH"] = "static-data-fetch";
  PLUGIN_TYPE2["TAG_PARSE"] = "element-render-hook";
  PLUGIN_TYPE2["TEST_HOOK"] = "test-hook";
})(PLUGIN_TYPE || (PLUGIN_TYPE = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/plugin/plugin.ts
var PluginError = class extends Error {
  get error_class() {
    return "plugin";
  }
};
var PluginTypeError = class extends PluginError {
  constructor(plugin) {
    if ("validateSpecifier" in plugin)
      super(`Could Not Load PluginSpec: Invalid type [${plugin?.type}]`);
    else
      super(`Could Not Load Plugin: Invalid type [${plugin?.type}]`);
  }
};
var PluginSpecifierError = class extends PluginError {
  constructor(plugin) {
    super("Could Not Load Plugin: Invalid Specifier type");
  }
};
var PluginSpecTypeError = class extends PluginError {
  constructor(plugin) {
    super(`Spec type [${plugin?.type}] is not a valid plugin type.`);
  }
};
var PluginValidationError = class extends PluginError {
  constructor(plugin) {
    super(`Spec type [${plugin?.type}] has an invalid or missing validationSpecifier function`);
  }
};
var PluginRequiresError = class extends PluginError {
  constructor(plugin) {
    if (!plugin.requires)
      super(`Missing requires object on spec ${plugin.type}`);
    else
      super(`Missing one or both of requirements clientHandler or serverHandler`);
  }
};
var PluginRecoverError = class extends PluginError {
  constructor(plugin) {
    super(`Missing defaultRecover function`);
  }
};
var PluginMissingRequirementError = class extends PluginError {
  constructor(plugin, requirement) {
    super(`Plugin ${plugin.type}::${plugin.specifier} missing requirement ${requirement}`);
  }
};
var PluginStore = class {
  static addSpec(plugin_spec) {
    if (typeof plugin_spec?.type != "string")
      throw new PluginTypeError(plugin_spec);
    let HAS_VALUE = false;
    for (const key in PLUGIN_TYPE)
      if (PLUGIN_TYPE[key] == plugin_spec?.type) {
        HAS_VALUE = true;
        break;
      }
    if (PLUGIN_TYPE[plugin_spec?.type] == void 0) {
      if (!HAS_VALUE)
        throw new PluginSpecTypeError(plugin_spec);
    }
    if (!("validateSpecifier" in plugin_spec) || typeof plugin_spec.validateSpecifier("test-123") !== "boolean")
      throw new PluginValidationError(plugin_spec);
    if (!Array.isArray(plugin_spec.requires) || !plugin_spec.requires.includes("clientHandler") && !plugin_spec.requires.includes("serverHandler"))
      throw new PluginRequiresError(plugin_spec);
    if (typeof plugin_spec.defaultRecover != "function")
      throw new PluginRecoverError(plugin_spec);
    PluginStore.specs.set(plugin_spec.type, plugin_spec);
  }
  constructor() {
    this.plugins = new Map();
  }
  addPlugin(plugin) {
    if (typeof plugin?.type != "string" || !PluginStore.specs.has(plugin?.type))
      throw new PluginTypeError(plugin);
    const spec = PluginStore.specs.get(plugin.type);
    if (typeof plugin.specifier != "string" || !spec.validateSpecifier(plugin.specifier))
      throw new PluginSpecifierError(plugin);
    for (const requirement of spec.requires)
      if (!(requirement in plugin))
        throw new PluginMissingRequirementError(plugin, requirement);
    if (!this.plugins.has(plugin.type))
      this.plugins.set(plugin.type, new Map());
    this.plugins.get(plugin.type).set(plugin.specifier, plugin);
  }
  getPlugin(type, selector) {
    if (this.plugins.has(type)) {
      const plugin_class = this.plugins.get(type);
      if (plugin_class.has(selector)) {
        return plugin_class.get(selector);
      }
    }
    return null;
  }
  hasPlugin(type, selector) {
    if (this.plugins.has(type)) {
      const plugin_class = this.plugins.get(type);
      return plugin_class.has(selector);
    }
    return false;
  }
  async runClientPlugin(context, type, selector, ...args) {
    const plugin = this.getPlugin(type, selector);
    if (plugin)
      try {
        return await plugin.clientHandler(context, ...args);
      } catch (e) {
        console.log(e);
      }
    return await PluginStore.specs.get(type).defaultRecover("clientHandler", selector, ...args);
  }
  async runServerPlugin(context, type, selector, ...args) {
    const plugin = this.getPlugin(type, selector);
    if (plugin)
      try {
        return await plugin.clientHandler(context, ...args);
      } catch (e) {
        console.log(e);
      }
    return await PluginStore.specs.get(type).defaultRecover("serverHandler", selector, ...args);
  }
};
PluginStore.specs = new Map();

// ../../lib_candlelib_2022/packages/wick/source/typescript/compiler/common/context.ts
var CachedPresets = null;
var DefaultPresets = {
  options: {
    USE_SHADOW: false,
    USE_SHADOWED_STYLE: false,
    CACHE_URL: false,
    GENERATE_SOURCE_MAPS: false,
    REMOVE_DEBUGGER_STATEMENTS: true,
    THROW_ON_ERRORS: true,
    INCLUDE_SOURCE_URI: false,
    url: {
      glow: "@candlelib/glow",
      wick: "@candlelib/wick",
      wickrt: "@candlelib/wick"
    }
  }
};
var _Context = class {
  constructor(user_presets = {}) {
    user_presets = Object.assign({}, DefaultPresets, user_presets);
    user_presets.options = Object.assign({}, DefaultPresets.options, user_presets.options);
    user_presets.options.url = Object.assign({}, DefaultPresets.options.url, (user_presets.options || {}).url || {});
    this.url = new uri_default2();
    this.document = typeof document != "undefined" ? document : {};
    this.window = typeof window != "undefined" ? window : {};
    this.wrapper = null;
    this.options = user_presets.options;
    this.api = {};
    this.models = {};
    this.globals = {};
    this.test_rig_sources = new Map();
    this.component_class = new Map();
    this.component_class_string = new Map();
    this.components = new Map();
    this.named_components = new Map();
    this.repo = new Map();
    this.styles = new Map();
    this.css_cache = new Map();
    this.plugins = new PluginStore();
    this.integrate_new_options(user_presets);
    this.template_data = new WeakMap();
    this.active_template_data = null;
    this.errors = new Map();
    this.warnings = new Map();
    this.processLink = (_) => _;
    CachedPresets = this;
  }
  integrate_new_options(user_presets) {
    this.verifyOptions(user_presets);
    this.addRepoData(user_presets);
    this.loadModelData(user_presets);
    this.loadSchemeData(user_presets);
    this.loadAPIObjects(user_presets);
  }
  hasErrors() {
    return this.errors.size > 0;
  }
  addError(comp, e) {
    if (!this.errors.has(comp.name))
      this.errors.set(comp.name, []);
    this.errors.get(comp.name).push(e);
  }
  getErrors(comp) {
    return this.errors.get(comp.name) ?? [];
  }
  clearErrors(comp) {
    if (this.errors.has(comp.name))
      this.errors.delete(comp.name);
  }
  addWarning(comp, e) {
    if (!this.warnings.has(comp.name))
      this.warnings.set(comp.name, []);
    this.warnings.get(comp.name).push(e);
  }
  getWarnings(comp) {
    return this.warnings.get(comp.name) ?? [];
  }
  clearWarnings(comp) {
    if (this.warnings.has(comp.name))
      this.warnings.delete(comp.name);
  }
  loadAPIObjects(user_presets) {
    if (user_presets.api) {
      for (const name2 in user_presets.api)
        this.addAPIObject(name2, user_presets.api[name2]);
    }
  }
  verifyOptions(user_presets) {
    const options = user_presets.options;
    for (const cn in options)
      if (typeof options[cn] != typeof DefaultPresets.options[cn])
        throw new ReferenceError(`Unrecognized preset ${cn}`);
  }
  loadSchemeData(user_presets) {
    const d = user_presets.schemes;
  }
  loadModelData(user_presets) {
    let c = user_presets.models;
    if (c)
      for (const cn in c)
        this.models[cn] = c[cn];
  }
  addRepoData(user_presets) {
    for (const [hash, url] of user_presets.repo || [])
      this.repo.set(url, {
        hash,
        url,
        module: null
      });
  }
  async getDataSource(uri) {
    const uri_str = uri + "";
    if (this.api) {
      if (uri_str in this.api)
        return this.api[uri_str].default;
      let value = void 0;
      if (await uri.DOES_THIS_EXIST()) {
        switch (uri.ext) {
          case "json":
            value = uri.fetchJSON();
            break;
        }
      }
      this.api[uri_str] = {
        hash: uri_str,
        default: value
      };
    }
    return this.getDataSource(uri);
  }
  addAPIObject(name2, obj) {
    if (this.api) {
      if (name2 in this.api)
        return;
      this.api[name2] = {
        hash: name2,
        default: obj
      };
    }
  }
  copy() {
    const obj = {};
    for (let a in this) {
      if (a == "components")
        obj.components = this.components;
      else if (typeof this[a] == "object")
        obj[a] = Object.assign({}, this[a]);
      else if (Array.is(this[a]))
        obj[a] = this[a].slice();
      else
        obj[a] = this[a];
    }
    const context = new _Context(obj);
    context.processLink = this.processLink.bind(this);
    return context;
  }
  assignGlobals(globals) {
    if (typeof globals == "object") {
      this.globals = Object.assign({}, globals);
    }
  }
};
var Context = _Context;
Context.global = { get v() {
  return CachedPresets;
}, set v(e) {
} };
var ModuleType;
(function(ModuleType2) {
  ModuleType2[ModuleType2["local"] = 0] = "local";
})(ModuleType || (ModuleType = {}));

// ../../lib_candlelib_2022/packages/spark/build/spark.js
var caller2 = typeof window == "object" && window?.requestAnimationFrame ? window.requestAnimationFrame : (f) => {
  setTimeout(() => f(perf2.now()), 5);
};
var perf2 = typeof performance == "undefined" ? { now: () => Date.now() } : performance;
var Spark2 = class {
  constructor() {
    this.update_queue_a = [];
    this.update_queue_b = [];
    this.update_queue = this.update_queue_a;
    this.queue_switch = 0;
    this.callback = this.update.bind(this);
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("load", () => {
        caller2(this.callback);
      });
    } else {
      this.callback = this.update.bind(this);
      caller2(this.callback);
    }
    this.frame_time = perf2.now();
    this.SCHEDULE_PENDING = false;
    this.ACTIVE_UPDATE = false;
  }
  queueUpdate(object, time_start = 1, time_end = 0, NOW = false) {
    if (NOW && this.ACTIVE_UPDATE) {
      if (object._SCHD_ == 1)
        return;
      if (this.queue_switch == 1)
        this.update_queue_a.push(object);
      else
        this.update_queue_b.push(object);
    } else {
      const IsInt = typeof object._SCHD_ == "number";
      if (IsInt && object._SCHD_ > 0)
        if (this.SCHEDULE_PENDING)
          return;
        else
          return caller2(this.callback);
      object._SCHD_ = (time_start & 65535 | time_end << 16) << 1;
      this.update_queue.push(object);
      this.frame_time = perf2.now() | 0;
      if (!this.SCHEDULE_PENDING) {
        this.SCHEDULE_PENDING = true;
        caller2(this.callback);
      }
    }
  }
  removeFromQueue(object) {
    if (object._SCHD_) {
      for (let i2 = 0, l = this.update_queue.length; i2 < l; i2++)
        if (this.update_queue[i2] === object) {
          this.update_queue.splice(i2, 1);
          object._SCHD_ = 0;
          if (l == 1)
            this.SCHEDULE_PENDING = false;
          return;
        }
    }
  }
  update(timestamp) {
    this.SCHEDULE_PENDING = false;
    this.ACTIVE_UPDATE = true;
    const uq = this.update_queue, time = timestamp, diff = Math.ceil(time - this.frame_time) | 1, step_ratio = diff * 0.06;
    this.frame_time = time;
    if (this.queue_switch == 0)
      this.update_queue = this.update_queue_b, this.queue_switch = 1;
    else
      this.update_queue = this.update_queue_a, this.queue_switch = 0;
    for (let i2 = 0, l = uq.length, o = uq[0]; i2 < uq.length; o = uq[++i2]) {
      let schd = o._SCHD_ >> 1, timestart = (schd & 65535) - diff, timeend = schd >> 16 & 65535;
      o._SCHD_ = 0;
      if (timestart > 0) {
        this.queueUpdate(o, timestart, timeend);
        continue;
      }
      timestart = 0;
      if (timeend > 0)
        this.queueUpdate(o, timestart, timeend - diff);
      try {
        o.scheduledUpdate(step_ratio, diff);
      } catch (e) {
        if (e instanceof Error)
          this.handleError(e);
      }
    }
    this.ACTIVE_UPDATE = false;
    uq.length = 0;
  }
  handleError(e) {
    console.log("Spark: Error encountered");
    console.error(e);
  }
  async sleep(timeout = 1) {
    return new Promise((res) => {
      this.queueUpdate({
        scheduledUpdate: () => res(1)
      }, timeout);
    });
  }
};
var spark2 = new Spark2();
var spark_default2 = spark2;

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/binding.ts
var BINDING_VARIABLE_TYPE;
(function(BINDING_VARIABLE_TYPE2) {
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["UNDECLARED"] = 0] = "UNDECLARED";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["INTERNAL_VARIABLE"] = 1] = "INTERNAL_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["ATTRIBUTE_VARIABLE"] = 2] = "ATTRIBUTE_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["MODEL_VARIABLE"] = 4] = "MODEL_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["MODEL_DIRECT"] = 512] = "MODEL_DIRECT";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["TEMPLATE_CONSTANT"] = 1024] = "TEMPLATE_CONSTANT";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["TEMPLATE_INITIALIZER"] = 2048] = "TEMPLATE_INITIALIZER";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["TEMPLATE_DATA"] = 8192] = "TEMPLATE_DATA";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["CURE_TEST"] = 4096] = "CURE_TEST";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["CONFIG_GLOBAL"] = 8192] = "CONFIG_GLOBAL";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["GLOBAL_VARIABLE"] = 8] = "GLOBAL_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["METHOD_VARIABLE"] = 16] = "METHOD_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["CONST_INTERNAL_VARIABLE"] = 32] = "CONST_INTERNAL_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["MODULE_MEMBER_VARIABLE"] = 64] = "MODULE_MEMBER_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["MODULE_VARIABLE"] = 128] = "MODULE_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["MODULE_NAMESPACE_VARIABLE"] = 256] = "MODULE_NAMESPACE_VARIABLE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["CONSTANT_DATA_SOURCE"] = 16384] = "CONSTANT_DATA_SOURCE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["DYNAMIC_DATA_SOURCE"] = 32768] = "DYNAMIC_DATA_SOURCE";
  BINDING_VARIABLE_TYPE2[BINDING_VARIABLE_TYPE2["DIRECT_ACCESS"] = 208] = "DIRECT_ACCESS";
})(BINDING_VARIABLE_TYPE || (BINDING_VARIABLE_TYPE = {}));
var BINDING_FLAG;
(function(BINDING_FLAG2) {
  BINDING_FLAG2[BINDING_FLAG2["DEFAULT_BINDING_STATE"] = 1] = "DEFAULT_BINDING_STATE";
  BINDING_FLAG2[BINDING_FLAG2["FROM_PARENT"] = 2] = "FROM_PARENT";
  BINDING_FLAG2[BINDING_FLAG2["FROM_PRESETS"] = 4] = "FROM_PRESETS";
  BINDING_FLAG2[BINDING_FLAG2["FROM_OUTSIDE"] = 8] = "FROM_OUTSIDE";
  BINDING_FLAG2[BINDING_FLAG2["ALLOW_EXPORT_TO_PARENT"] = 16] = "ALLOW_EXPORT_TO_PARENT";
  BINDING_FLAG2[BINDING_FLAG2["ALLOW_UPDATE_FROM_CHILD"] = 32] = "ALLOW_UPDATE_FROM_CHILD";
  BINDING_FLAG2[BINDING_FLAG2["ALLOW_UPDATE_FROM_MODEL"] = 64] = "ALLOW_UPDATE_FROM_MODEL";
  BINDING_FLAG2[BINDING_FLAG2["WRITTEN"] = 128] = "WRITTEN";
})(BINDING_FLAG || (BINDING_FLAG = {}));
var STATIC_BINDING_STATE;
(function(STATIC_BINDING_STATE2) {
  STATIC_BINDING_STATE2[STATIC_BINDING_STATE2["UNCHECKED"] = 0] = "UNCHECKED";
  STATIC_BINDING_STATE2[STATIC_BINDING_STATE2["TRUE"] = 1] = "TRUE";
  STATIC_BINDING_STATE2[STATIC_BINDING_STATE2["FALSE"] = 2] = "FALSE";
  STATIC_BINDING_STATE2[STATIC_BINDING_STATE2["STATIC_CONSTANT"] = 4] = "STATIC_CONSTANT";
  STATIC_BINDING_STATE2[STATIC_BINDING_STATE2["STATIC_RUNTIME"] = 8] = "STATIC_RUNTIME";
})(STATIC_BINDING_STATE || (STATIC_BINDING_STATE = {}));
var STATIC_RESOLUTION_TYPE;
(function(STATIC_RESOLUTION_TYPE2) {
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["UNDEFINED"] = 0] = "UNDEFINED";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["CONSTANT_STATIC"] = 1] = "CONSTANT_STATIC";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_MODEL"] = 2] = "WITH_MODEL";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_MODULE"] = 4] = "WITH_MODULE";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_PARENT"] = 8] = "WITH_PARENT";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_GLOBAL"] = 16] = "WITH_GLOBAL";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_VARIABLE"] = 32] = "WITH_VARIABLE";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["WITH_TEMPLATE"] = 64] = "WITH_TEMPLATE";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["STATIC_WITH_PARENT"] = 9] = "STATIC_WITH_PARENT";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["STATIC_WITH_MODULE"] = 5] = "STATIC_WITH_MODULE";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["STATIC_WITH_MODEL"] = 3] = "STATIC_WITH_MODEL";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["STATIC_WITH_GLOBAL"] = 17] = "STATIC_WITH_GLOBAL";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["STATIC_WITH_VARIABLE"] = 33] = "STATIC_WITH_VARIABLE";
  STATIC_RESOLUTION_TYPE2[STATIC_RESOLUTION_TYPE2["INVALID"] = 255] = "INVALID";
})(STATIC_RESOLUTION_TYPE || (STATIC_RESOLUTION_TYPE = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/errors.ts
var WickComponentErrorCode;
(function(WickComponentErrorCode2) {
  WickComponentErrorCode2[WickComponentErrorCode2["FAILED_TO_FETCH_RESOURCE"] = 0] = "FAILED_TO_FETCH_RESOURCE";
  WickComponentErrorCode2[WickComponentErrorCode2["SYNTAX_ERROR_DURING_PARSE"] = 1] = "SYNTAX_ERROR_DURING_PARSE";
})(WickComponentErrorCode || (WickComponentErrorCode = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/hook.ts
var HOOK_TYPE;
(function(HOOK_TYPE2) {
  HOOK_TYPE2[HOOK_TYPE2["READ"] = 1] = "READ";
  HOOK_TYPE2[HOOK_TYPE2["WRITE"] = 2] = "WRITE";
  HOOK_TYPE2[HOOK_TYPE2["READONLY"] = 1] = "READONLY";
  HOOK_TYPE2[HOOK_TYPE2["WRITE_ONLY"] = 2] = "WRITE_ONLY";
  HOOK_TYPE2[HOOK_TYPE2["READ_WRITE"] = 3] = "READ_WRITE";
})(HOOK_TYPE || (HOOK_TYPE = {}));
var HOOK_SELECTOR;
(function(HOOK_SELECTOR2) {
  HOOK_SELECTOR2["ELEMENT_SELECTOR_STRING"] = "esl";
  HOOK_SELECTOR2["WATCHED_FRAME_METHOD_CALL"] = "wfm";
  HOOK_SELECTOR2["METHOD_CALL"] = "mc";
  HOOK_SELECTOR2["IMPORT_FROM_CHILD"] = "ifc";
  HOOK_SELECTOR2["EXPORT_TO_CHILD"] = "etc";
  HOOK_SELECTOR2["IMPORT_FROM_PARENT"] = "ifp";
  HOOK_SELECTOR2["EXPORT_TO_PARENT"] = "etp";
  HOOK_SELECTOR2["INPUT_VALUE"] = "imp";
  HOOK_SELECTOR2["CHECKED_VALUE"] = "chk";
  HOOK_SELECTOR2["CONTAINER_USE_IF"] = "cui";
  HOOK_SELECTOR2["CONTAINER_USE_EMPTY"] = "cue";
})(HOOK_SELECTOR || (HOOK_SELECTOR = {}));
var ProcessedHookType;
(function(ProcessedHookType2) {
  ProcessedHookType2[ProcessedHookType2["INITIALIZE"] = 0] = "INITIALIZE";
  ProcessedHookType2[ProcessedHookType2["ASYNC_INITIALIZE"] = 1] = "ASYNC_INITIALIZE";
  ProcessedHookType2[ProcessedHookType2["VAR_UPDATE"] = 2] = "VAR_UPDATE";
  ProcessedHookType2[ProcessedHookType2["DESTROY"] = 4] = "DESTROY";
})(ProcessedHookType || (ProcessedHookType = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/html.ts
var htmlState;
(function(htmlState2) {
  htmlState2[htmlState2["IS_ROOT"] = 1] = "IS_ROOT";
  htmlState2[htmlState2["EXTERNAL_COMPONENT"] = 2] = "EXTERNAL_COMPONENT";
  htmlState2[htmlState2["IS_COMPONENT"] = 4] = "IS_COMPONENT";
  htmlState2[htmlState2["IS_SLOT_REPLACEMENT"] = 8] = "IS_SLOT_REPLACEMENT";
  htmlState2[htmlState2["IS_INTERLEAVED"] = 16] = "IS_INTERLEAVED";
})(htmlState || (htmlState = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/types/wick_ast.ts
var HTMLNodeClass;
(function(HTMLNodeClass2) {
  HTMLNodeClass2[HTMLNodeClass2["HTML_NODE"] = 1048576] = "HTML_NODE";
  HTMLNodeClass2[HTMLNodeClass2["HTML_ELEMENT"] = 2097152] = "HTML_ELEMENT";
})(HTMLNodeClass || (HTMLNodeClass = {}));
var HTMLNodeType;
(function(HTMLNodeType2) {
  HTMLNodeType2[HTMLNodeType2["WickBinding"] = 1233125376] = "WickBinding";
  HTMLNodeType2[HTMLNodeType2["HTML_IMPORT"] = 1244659712] = "HTML_IMPORT";
  HTMLNodeType2[HTMLNodeType2["HTMLAttribute"] = 1250951168] = "HTMLAttribute";
  HTMLNodeType2[HTMLNodeType2["HTMLText"] = 1259339776] = "HTMLText";
  HTMLNodeType2[HTMLNodeType2["ERROR"] = 1266679808] = "ERROR";
  HTMLNodeType2[HTMLNodeType2["HTML_Element"] = 1278214144] = "HTML_Element";
  HTMLNodeType2[HTMLNodeType2["HTML_TEXT"] = 1286602752] = "HTML_TEXT";
  HTMLNodeType2[HTMLNodeType2["HTML_TT"] = 1294991360] = "HTML_TT";
  HTMLNodeType2[HTMLNodeType2["HTML_I"] = 1303379968] = "HTML_I";
  HTMLNodeType2[HTMLNodeType2["HTML_B"] = 1311768576] = "HTML_B";
  HTMLNodeType2[HTMLNodeType2["HTML_BIG"] = 1320157184] = "HTML_BIG";
  HTMLNodeType2[HTMLNodeType2["HTML_SMALL"] = 1328545792] = "HTML_SMALL";
  HTMLNodeType2[HTMLNodeType2["HTML_EM"] = 1336934400] = "HTML_EM";
  HTMLNodeType2[HTMLNodeType2["HTML_STRONG"] = 1345323008] = "HTML_STRONG";
  HTMLNodeType2[HTMLNodeType2["HTML_DFN"] = 1353711616] = "HTML_DFN";
  HTMLNodeType2[HTMLNodeType2["HTML_CODE"] = 1362100224] = "HTML_CODE";
  HTMLNodeType2[HTMLNodeType2["HTML_SAMP"] = 1370488832] = "HTML_SAMP";
  HTMLNodeType2[HTMLNodeType2["HTML_KBD"] = 1378877440] = "HTML_KBD";
  HTMLNodeType2[HTMLNodeType2["HTML_VAR"] = 1387266048] = "HTML_VAR";
  HTMLNodeType2[HTMLNodeType2["HTML_CITE"] = 1395654656] = "HTML_CITE";
  HTMLNodeType2[HTMLNodeType2["HTML_ABBR"] = 1404043264] = "HTML_ABBR";
  HTMLNodeType2[HTMLNodeType2["HTML_ACRONYM"] = 1412431872] = "HTML_ACRONYM";
  HTMLNodeType2[HTMLNodeType2["HTML_SUP"] = 1420820480] = "HTML_SUP";
  HTMLNodeType2[HTMLNodeType2["HTML_SPAN"] = 1429209088] = "HTML_SPAN";
  HTMLNodeType2[HTMLNodeType2["HTML_BDO"] = 1437597696] = "HTML_BDO";
  HTMLNodeType2[HTMLNodeType2["HTML_BR"] = 1445986304] = "HTML_BR";
  HTMLNodeType2[HTMLNodeType2["HTML_BODY"] = 1454374912] = "HTML_BODY";
  HTMLNodeType2[HTMLNodeType2["HTML_ADDRESS"] = 1462763520] = "HTML_ADDRESS";
  HTMLNodeType2[HTMLNodeType2["HTML_DIV"] = 1471152128] = "HTML_DIV";
  HTMLNodeType2[HTMLNodeType2["HTML_A"] = 1479540736] = "HTML_A";
  HTMLNodeType2[HTMLNodeType2["HTML_MAP"] = 1487929344] = "HTML_MAP";
  HTMLNodeType2[HTMLNodeType2["HTML_AREA"] = 1496317952] = "HTML_AREA";
  HTMLNodeType2[HTMLNodeType2["HTML_LINK"] = 1504706560] = "HTML_LINK";
  HTMLNodeType2[HTMLNodeType2["HTML_IMG"] = 1513095168] = "HTML_IMG";
  HTMLNodeType2[HTMLNodeType2["HTML_OBJECT"] = 1521483776] = "HTML_OBJECT";
  HTMLNodeType2[HTMLNodeType2["HTML_PARAM"] = 1529872384] = "HTML_PARAM";
  HTMLNodeType2[HTMLNodeType2["HTML_HR"] = 1538260992] = "HTML_HR";
  HTMLNodeType2[HTMLNodeType2["HTML_P"] = 1546649600] = "HTML_P";
  HTMLNodeType2[HTMLNodeType2["HTML_H1"] = 1555038208] = "HTML_H1";
  HTMLNodeType2[HTMLNodeType2["HTML_H2"] = 1563426816] = "HTML_H2";
  HTMLNodeType2[HTMLNodeType2["HTML_H3"] = 1571815424] = "HTML_H3";
  HTMLNodeType2[HTMLNodeType2["HTML_H4"] = 1580204032] = "HTML_H4";
  HTMLNodeType2[HTMLNodeType2["HTML_H5"] = 1588592640] = "HTML_H5";
  HTMLNodeType2[HTMLNodeType2["HTML_H6"] = 1596981248] = "HTML_H6";
  HTMLNodeType2[HTMLNodeType2["HTML_PRE"] = 1605369856] = "HTML_PRE";
  HTMLNodeType2[HTMLNodeType2["HTML_Q"] = 1613758464] = "HTML_Q";
  HTMLNodeType2[HTMLNodeType2["HTML_BLOCKQUOTE"] = 1622147072] = "HTML_BLOCKQUOTE";
  HTMLNodeType2[HTMLNodeType2["HTML_INS"] = 1630535680] = "HTML_INS";
  HTMLNodeType2[HTMLNodeType2["HTML_DEL"] = 1638924288] = "HTML_DEL";
  HTMLNodeType2[HTMLNodeType2["HTML_DL"] = 1647312896] = "HTML_DL";
  HTMLNodeType2[HTMLNodeType2["HTML_DT"] = 1655701504] = "HTML_DT";
  HTMLNodeType2[HTMLNodeType2["HTML_DD"] = 1664090112] = "HTML_DD";
  HTMLNodeType2[HTMLNodeType2["HTML_OL"] = 1672478720] = "HTML_OL";
  HTMLNodeType2[HTMLNodeType2["HTML_UL"] = 1680867328] = "HTML_UL";
  HTMLNodeType2[HTMLNodeType2["HTML_LI"] = 1689255936] = "HTML_LI";
  HTMLNodeType2[HTMLNodeType2["HTML_FORM"] = 1697644544] = "HTML_FORM";
  HTMLNodeType2[HTMLNodeType2["HTML_LABEL"] = 1706033152] = "HTML_LABEL";
  HTMLNodeType2[HTMLNodeType2["HTML_INPUT"] = 1714421760] = "HTML_INPUT";
  HTMLNodeType2[HTMLNodeType2["HTML_SELECT"] = 1722810368] = "HTML_SELECT";
  HTMLNodeType2[HTMLNodeType2["HTML_OPTGROUP"] = 1731198976] = "HTML_OPTGROUP";
  HTMLNodeType2[HTMLNodeType2["HTML_OPTION"] = 1739587584] = "HTML_OPTION";
  HTMLNodeType2[HTMLNodeType2["HTML_TEXTAREA"] = 1747976192] = "HTML_TEXTAREA";
  HTMLNodeType2[HTMLNodeType2["HTML_FIELDSET"] = 1756364800] = "HTML_FIELDSET";
  HTMLNodeType2[HTMLNodeType2["HTML_LEGEND"] = 1764753408] = "HTML_LEGEND";
  HTMLNodeType2[HTMLNodeType2["HTML_BUTTON"] = 1773142016] = "HTML_BUTTON";
  HTMLNodeType2[HTMLNodeType2["HTML_TABLE"] = 1781530624] = "HTML_TABLE";
  HTMLNodeType2[HTMLNodeType2["HTML_CAPTION"] = 1789919232] = "HTML_CAPTION";
  HTMLNodeType2[HTMLNodeType2["HTML_THEAD"] = 1798307840] = "HTML_THEAD";
  HTMLNodeType2[HTMLNodeType2["HTML_TFOOT"] = 1806696448] = "HTML_TFOOT";
  HTMLNodeType2[HTMLNodeType2["HTML_TBODY"] = 1815085056] = "HTML_TBODY";
  HTMLNodeType2[HTMLNodeType2["HTML_COLGROUP"] = 1823473664] = "HTML_COLGROUP";
  HTMLNodeType2[HTMLNodeType2["HTML_COL"] = 1831862272] = "HTML_COL";
  HTMLNodeType2[HTMLNodeType2["HTML_TR"] = 1840250880] = "HTML_TR";
  HTMLNodeType2[HTMLNodeType2["HTML_TH"] = 1848639488] = "HTML_TH";
  HTMLNodeType2[HTMLNodeType2["HTML_TD"] = 1857028096] = "HTML_TD";
  HTMLNodeType2[HTMLNodeType2["HTML_HEAD"] = 1865416704] = "HTML_HEAD";
  HTMLNodeType2[HTMLNodeType2["HTML_TITLE"] = 1873805312] = "HTML_TITLE";
  HTMLNodeType2[HTMLNodeType2["HTML_BASE"] = 1882193920] = "HTML_BASE";
  HTMLNodeType2[HTMLNodeType2["HTML_META"] = 1890582528] = "HTML_META";
  HTMLNodeType2[HTMLNodeType2["HTML_STYLE"] = 1898971136] = "HTML_STYLE";
  HTMLNodeType2[HTMLNodeType2["HTML_SCRIPT"] = 1907359744] = "HTML_SCRIPT";
  HTMLNodeType2[HTMLNodeType2["HTML_NOSCRIPT"] = 1915748352] = "HTML_NOSCRIPT";
  HTMLNodeType2[HTMLNodeType2["HTML_HTML"] = 1924136960] = "HTML_HTML";
  HTMLNodeType2[HTMLNodeType2["HTML_SVG"] = 1932525568] = "HTML_SVG";
  HTMLNodeType2[HTMLNodeType2["HTML_BINDING_ELEMENT"] = 1932525568] = "HTML_BINDING_ELEMENT";
  HTMLNodeType2[HTMLNodeType2["CompiledBinding"] = 1937768448] = "CompiledBinding";
  HTMLNodeType2[HTMLNodeType2["ComponentVariableDeclaration"] = 1946157056] = "ComponentVariableDeclaration";
  HTMLNodeType2[HTMLNodeType2["MARKDOWN"] = 1957691392] = "MARKDOWN";
})(HTMLNodeType || (HTMLNodeType = {}));
var HTMLNodeTypeLU;
(function(HTMLNodeTypeLU2) {
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["WickBinding"] = 1233125376] = "WickBinding";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_IMPORT"] = 1244659712] = "HTML_IMPORT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTMLAttribute"] = 1250951168] = "HTMLAttribute";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTMLText"] = 1259339776] = "HTMLText";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["ERROR"] = 1266679808] = "ERROR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_Element"] = 1278214144] = "HTML_Element";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TEXT"] = 1286602752] = "HTML_TEXT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TT"] = 1294991360] = "HTML_TT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_I"] = 1303379968] = "HTML_I";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_B"] = 1311768576] = "HTML_B";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BIG"] = 1320157184] = "HTML_BIG";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SMALL"] = 1328545792] = "HTML_SMALL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_EM"] = 1336934400] = "HTML_EM";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_STRONG"] = 1345323008] = "HTML_STRONG";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DFN"] = 1353711616] = "HTML_DFN";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_CODE"] = 1362100224] = "HTML_CODE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SAMP"] = 1370488832] = "HTML_SAMP";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_KBD"] = 1378877440] = "HTML_KBD";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_VAR"] = 1387266048] = "HTML_VAR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_CITE"] = 1395654656] = "HTML_CITE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_ABBR"] = 1404043264] = "HTML_ABBR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_ACRONYM"] = 1412431872] = "HTML_ACRONYM";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SUP"] = 1420820480] = "HTML_SUP";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SPAN"] = 1429209088] = "HTML_SPAN";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BDO"] = 1437597696] = "HTML_BDO";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BR"] = 1445986304] = "HTML_BR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BODY"] = 1454374912] = "HTML_BODY";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_ADDRESS"] = 1462763520] = "HTML_ADDRESS";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DIV"] = 1471152128] = "HTML_DIV";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_A"] = 1479540736] = "HTML_A";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_MAP"] = 1487929344] = "HTML_MAP";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_AREA"] = 1496317952] = "HTML_AREA";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_LINK"] = 1504706560] = "HTML_LINK";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_IMG"] = 1513095168] = "HTML_IMG";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_OBJECT"] = 1521483776] = "HTML_OBJECT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_PARAM"] = 1529872384] = "HTML_PARAM";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_HR"] = 1538260992] = "HTML_HR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_P"] = 1546649600] = "HTML_P";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H1"] = 1555038208] = "HTML_H1";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H2"] = 1563426816] = "HTML_H2";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H3"] = 1571815424] = "HTML_H3";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H4"] = 1580204032] = "HTML_H4";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H5"] = 1588592640] = "HTML_H5";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_H6"] = 1596981248] = "HTML_H6";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_PRE"] = 1605369856] = "HTML_PRE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_Q"] = 1613758464] = "HTML_Q";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BLOCKQUOTE"] = 1622147072] = "HTML_BLOCKQUOTE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_INS"] = 1630535680] = "HTML_INS";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DEL"] = 1638924288] = "HTML_DEL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DL"] = 1647312896] = "HTML_DL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DT"] = 1655701504] = "HTML_DT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_DD"] = 1664090112] = "HTML_DD";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_OL"] = 1672478720] = "HTML_OL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_UL"] = 1680867328] = "HTML_UL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_LI"] = 1689255936] = "HTML_LI";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_FORM"] = 1697644544] = "HTML_FORM";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_LABEL"] = 1706033152] = "HTML_LABEL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_INPUT"] = 1714421760] = "HTML_INPUT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SELECT"] = 1722810368] = "HTML_SELECT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_OPTGROUP"] = 1731198976] = "HTML_OPTGROUP";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_OPTION"] = 1739587584] = "HTML_OPTION";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TEXTAREA"] = 1747976192] = "HTML_TEXTAREA";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_FIELDSET"] = 1756364800] = "HTML_FIELDSET";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_LEGEND"] = 1764753408] = "HTML_LEGEND";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BUTTON"] = 1773142016] = "HTML_BUTTON";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TABLE"] = 1781530624] = "HTML_TABLE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_CAPTION"] = 1789919232] = "HTML_CAPTION";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_THEAD"] = 1798307840] = "HTML_THEAD";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TFOOT"] = 1806696448] = "HTML_TFOOT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TBODY"] = 1815085056] = "HTML_TBODY";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_COLGROUP"] = 1823473664] = "HTML_COLGROUP";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_COL"] = 1831862272] = "HTML_COL";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TR"] = 1840250880] = "HTML_TR";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TH"] = 1848639488] = "HTML_TH";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TD"] = 1857028096] = "HTML_TD";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_HEAD"] = 1865416704] = "HTML_HEAD";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_TITLE"] = 1873805312] = "HTML_TITLE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BASE"] = 1882193920] = "HTML_BASE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_META"] = 1890582528] = "HTML_META";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_STYLE"] = 1898971136] = "HTML_STYLE";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SCRIPT"] = 1907359744] = "HTML_SCRIPT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_NOSCRIPT"] = 1915748352] = "HTML_NOSCRIPT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_HTML"] = 1924136960] = "HTML_HTML";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_SVG"] = 1932525568] = "HTML_SVG";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["HTML_BINDING_ELEMENT"] = 1932525568] = "HTML_BINDING_ELEMENT";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["CompiledBinding"] = 1937768448] = "CompiledBinding";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["ComponentVariableDeclaration"] = 1946157056] = "ComponentVariableDeclaration";
  HTMLNodeTypeLU2[HTMLNodeTypeLU2["MARKDOWN"] = 1957691392] = "MARKDOWN";
})(HTMLNodeTypeLU || (HTMLNodeTypeLU = {}));

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/global.ts
var rt = (() => {
  let glow = null;
  return {
    async loadGlow(glow_url = "@candlelib/glow") {
      glow = (await import(glow_url)).default;
      return glow;
    },
    root_components: [],
    get glow() {
      return glow;
    },
    get p() {
      return rt.context;
    },
    get C() {
      return WickRTComponent;
    },
    router: null,
    context: null,
    rC: (component) => (rt.context.component_class.set(component.name, component), component),
    gC: (component_name) => rt.context.component_class.get(component_name),
    templates: new Map(),
    OVERRIDABLE_onComponentCreate(component_instance) {
    },
    OVERRIDABLE_onComponentMetaChange() {
    },
    setPresets: (preset_options) => {
      if (rt.context) {
        if (preset_options)
          rt.context.integrate_new_options(preset_options);
      } else {
        const context = new Context(preset_options);
        rt.context = context;
      }
      return rt.context;
    },
    init: null,
    addAPI(obj) {
      if (rt.context.api)
        for (const name2 in obj)
          rt.context.api[name2] = { default: obj[name2] };
    }
  };
})();

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/component/container.ts
function getColumnRow(index, offset, set_size) {
  const adjusted_index = index - offset * set_size;
  const row = Math.floor(adjusted_index / set_size);
  const col = index % set_size;
  return { row, col };
}
function createTransition(val) {
  if (!rt.glow) {
    const trs = { add: () => null, addEventListener: (n, v) => v() };
    return {
      in: trs,
      out: trs,
      play: () => null,
      addEventListener: (n, v) => {
        v();
      }
    };
  } else
    return rt.glow.createTransition(val);
}
var TransitionType;
(function(TransitionType2) {
  TransitionType2[TransitionType2["OUT"] = 0] = "OUT";
  TransitionType2[TransitionType2["IN"] = 1] = "IN";
  TransitionType2[TransitionType2["ARRANGE"] = 2] = "ARRANGE";
})(TransitionType || (TransitionType = {}));
var component_attributes_default = [[[]]];
var WickContainer = class {
  constructor(component_constructors, component_attributes, element, parent_comp, null_elements = []) {
    this.comp_constructors = component_constructors;
    this.comp_attributes = component_attributes || component_attributes_default;
    this.activeComps = [];
    this.dom_comp = [];
    this.filters = [];
    this.comps = [];
    this.dom_dn = [];
    this.dom_up = [];
    this.evaluators = Array(component_constructors.length);
    this.transition_list = [];
    this._SCHD_ = 0;
    this.shift_amount = 1;
    this.limit = Infinity;
    this.offset = 0;
    this.offset_diff = 0;
    this.offset_fractional = 0;
    this.scrub_velocity = 0;
    this.drag = 0.5;
    this.max = 0;
    this.trs_ascending = null;
    this.trs_descending = null;
    this.USE_NULL_ELEMENT = false;
    this.NULL_ELEMENT_DISCONNECTED = false;
    this.UPDATE_FILTER = false;
    this.DOM_UP_APPENDED = false;
    this.DOM_DN_APPENDED = false;
    this.AUTO_SCRUB = false;
    this.LOADED = false;
    this.SCRUBBING = false;
    this.container = null;
    this.parent = parent_comp;
    this.filter = null;
    this.sort = null;
    this.first_dom_element = null;
    this.last_dom_element = null;
    this.components_pending_removal = [];
    this.ele = element;
    if (null_elements.length > 0 || this.ele.tagName == "NULL") {
      this.USE_NULL_ELEMENT = true;
      if (null_elements.length > 0) {
        this.NULL_ELEMENT_DISCONNECTED = true;
        if (this.ele.parentElement)
          this.ele.parentElement.removeChild(this.ele);
        this.first_dom_element = null_elements[0];
        this.last_dom_element = null_elements[null_elements.length - 1];
        for (const comp of hydrateComponentElements(null_elements)) {
          comp.connect();
          this.activeComps.push(comp);
          this.comps.push(comp);
          this.dom_comp.push(comp);
        }
      }
    } else {
      if (this.ele.tagName == "TABLE") {
        if (this.ele.firstElementChild && this.ele.firstElementChild.tagName == "TBODY")
          this.ele = this.ele.firstElementChild;
      }
      if (this.ele.childElementCount > 0) {
        for (const comp of hydrateComponentElements(Array.from(this.ele.children))) {
          comp.par = parent_comp;
          comp.connect();
          this.activeComps.push(comp);
          this.comps.push(comp);
          this.dom_comp.push(comp);
        }
      }
    }
  }
  destructor() {
    this.filter_new_items();
    if (this.container && this.container.OBSERVABLE)
      this.container.unsubscribe(this);
  }
  sd(container) {
    if (!container)
      return;
    if (container.OBSERVABLE) {
      const ctr = container;
      ctr.subscribe(this);
    } else {
      if (Array.isArray(container))
        this.filter_new_items(container);
      else
        this.filter_new_items(container.data);
    }
    this.setLoadedFlag();
  }
  removeModel() {
  }
  onModelUpdate(container) {
    this.filter_new_items(container.data);
  }
  setLoadedFlag() {
    if (!this.LOADED)
      this.LOADED = true;
  }
  forceMount() {
    const active_window_size = this.limit, offset = this.offset, min = Math.min(offset + this.offset_diff, offset) * this.shift_amount, max = Math.max(offset + this.offset_diff, offset) * this.shift_amount + active_window_size, output_length = this.activeComps.length;
    let i2 = min;
    this.ele.innerHTML = "";
    this.dom_comp.length = 0;
    while (i2 < max && i2 < output_length) {
      const node = this.activeComps[i2++];
      this.dom_comp.push(node);
      this.append(node);
    }
  }
  scrub(scrub_delta, SCRUBBING = true) {
    const w_data = this.getWindowData();
    if (w_data.limit == 0) {
      this.SCRUBBING = false;
      return;
    }
    if (!this.SCRUBBING)
      this.arrangeScrub(w_data, this.activeComps);
    this.SCRUBBING = true;
    if (this.AUTO_SCRUB && !SCRUBBING && scrub_delta != Infinity) {
      this.scrub_velocity = 0;
      this.AUTO_SCRUB = false;
    }
    let delta_offset = scrub_delta + this.offset_fractional;
    if (scrub_delta !== Infinity) {
      if (Math.abs(delta_offset) > 1) {
        if (delta_offset > 0) {
          delta_offset = delta_offset % 1;
          this.offset_fractional = delta_offset;
          this.scrub_velocity = scrub_delta;
          if (this.offset < this.max)
            this.trs_ascending.step(1);
          this.offset++;
          this.offset_diff = 1;
          this.mutateDOM(this.getWindowData(), null, this.activeComps, true).step(1).issueStopped();
          this.arrangeScrub(w_data, this.activeComps);
        } else {
          delta_offset = delta_offset % 1;
          this.offset_fractional = delta_offset;
          this.scrub_velocity = scrub_delta;
          if (this.offset >= 1)
            this.trs_descending.step(1);
          this.offset--;
          this.offset_diff = -1;
          this.mutateDOM(this.getWindowData(), null, this.activeComps, true).step(1).issueStopped();
          this.arrangeScrub(w_data, this.activeComps);
        }
      }
      if (delta_offset > 0) {
        if (this.offset + delta_offset >= this.max - 1)
          delta_offset = 0;
        if (!this.DOM_UP_APPENDED) {
          for (let i2 = 0; i2 < this.dom_up.length; i2++) {
            this.append(this.dom_up[i2]);
            this.dom_up[i2].index = -1;
            this.dom_comp.push(this.dom_up[i2]);
          }
          this.DOM_UP_APPENDED = true;
        }
        this.trs_ascending.play(delta_offset);
      } else {
        if (this.offset < 1)
          delta_offset = 0;
        if (!this.DOM_DN_APPENDED) {
          for (let i2 = 0; i2 < this.dom_dn.length; i2++) {
            this.append(this.dom_dn[i2], this.dom_comp[0].ele);
            this.dom_dn[i2].index = -1;
          }
          this.dom_comp = this.dom_dn.concat(this.dom_comp);
          this.DOM_DN_APPENDED = true;
        }
        this.trs_descending.step(-delta_offset);
      }
      this.offset_fractional = delta_offset;
      this.scrub_velocity = scrub_delta;
      return true;
    } else {
      if (Math.abs(this.scrub_velocity) > 1e-4) {
        const sign = Math.sign(this.scrub_velocity);
        if (Math.abs(this.scrub_velocity) < 0.1)
          this.scrub_velocity = this.drag * 0.2 * sign;
        if (Math.abs(this.scrub_velocity) > 0.5)
          this.scrub_velocity = this.drag * sign;
        this.AUTO_SCRUB = true;
        let dist = this.scrub_velocity * (1 / (-this.drag + 1));
        let nearest = this.offset + this.offset_fractional + dist;
        nearest = this.scrub_velocity > 0 ? Math.min(this.max, Math.ceil(nearest)) : Math.max(0, Math.floor(nearest));
        let nearest_dist = nearest - (this.offset + this.offset_fractional);
        let drag = Math.abs(1 - 1 / (nearest_dist / this.scrub_velocity));
        this.drag = drag;
        this.scrub_velocity = this.scrub_velocity;
        this.SCRUBBING = true;
        spark_default2.queueUpdate(this);
        return true;
      } else {
        this.offset += Math.round(this.offset_fractional);
        this.scrub_velocity = 0;
        this.offset_fractional = 0;
        this.mutateDOM(this.getWindowData(), null, this.activeComps, true).step(1).issueStopped();
        this.SCRUBBING = false;
        return false;
      }
    }
  }
  arrangeScrub(w_data, output = this.activeComps) {
    let { limit, offset, output_length, active_window_start } = w_data, active_window_size = this.limit;
    if (active_window_size > 0) {
      this.shift_amount = Math.max(1, Math.min(active_window_size, this.shift_amount));
      let i2 = 0, oa = 0;
      const ein = [], shift_points = Math.ceil(output_length / this.shift_amount);
      this.max = shift_points - 1;
      offset = Math.max(0, Math.min(shift_points - 1, offset));
      this.trs_ascending = createTransition(false);
      this.trs_descending = createTransition(false);
      this.dom_dn.length = 0;
      this.dom_up.length = 0;
      this.DOM_UP_APPENDED = false;
      this.DOM_DN_APPENDED = false;
      while (i2 < active_window_start - this.shift_amount)
        output[i2++].index = -2;
      while (i2 < active_window_start) {
        this.dom_dn.push(output[i2]);
        const { row, col } = getColumnRow(i2, offset - 1, this.shift_amount);
        output[i2].transitionIn(row, col, true, this.trs_descending);
        output[i2++].index = -2;
      }
      while (i2 < active_window_start + active_window_size && i2 < output_length) {
        if (oa < this.shift_amount && ++oa) {
          const { row, col } = getColumnRow(i2, offset + 1, this.shift_amount);
          output[i2].transitionOut(row, col, true, this.trs_descending);
        } else {
          const { row, col } = getColumnRow(i2, offset + 1, this.shift_amount);
          output[i2].transitionIn(row, col, false, this.trs_ascending);
        }
        if (i2 >= active_window_start + active_window_size - this.shift_amount) {
          const { row, col } = getColumnRow(i2, offset - 1, this.shift_amount);
          output[i2].transitionOut(row, col, true, this.trs_descending);
        } else {
          const { row, col } = getColumnRow(i2, offset - 1, this.shift_amount);
          output[i2].arrange(row, col, this.trs_descending);
        }
        output[i2].index = i2;
        ein.push(output[i2++]);
      }
      while (i2 < active_window_start + active_window_size + this.shift_amount && i2 < output_length) {
        this.dom_up.push(output[i2]);
        const { row, col } = getColumnRow(i2, offset + 1, this.shift_amount);
        output[i2].transitionIn(row, col, false, this.trs_ascending);
        output[i2++].index = -3;
      }
      while (i2 < output_length)
        output[i2++].index = -3;
      output = ein;
      output_length = ein.length;
    } else {
      this.max = 0;
      this.limit = 0;
    }
  }
  prepareTransitioningComp(comp, TYPE, DESCENDING, row, col) {
    if (TYPE == 0) {
      comp.par = null;
      this.components_pending_removal.push(comp);
    } else
      comp.par = this.parent;
    this.transition_list.push({
      comp,
      TYPE,
      DESCENDING,
      row,
      col
    });
  }
  getWindowData(output = this.activeComps) {
    const limit = this.limit, offset = this.offset, output_length = output.length, active_window_start = Math.max(0, offset * this.shift_amount), upper_bound = Math.min(active_window_start + limit, output_length), direction = Math.sign(this.offset_diff), DESCENDING = direction < 0;
    return {
      limit,
      offset,
      output_length,
      active_window_start,
      upper_bound,
      direction,
      DESCENDING
    };
  }
  arrange(w_data, output = this.activeComps, transition = createTransition()) {
    const { limit, offset, output_length, active_window_start, upper_bound, DESCENDING } = w_data;
    let i2 = 0;
    while (i2 < active_window_start && i2 < output_length) {
      if (output[i2].CONNECTED) {
        const { row, col } = getColumnRow(i2, offset, this.shift_amount);
        this.prepareTransitioningComp(output[i2], 0, DESCENDING, row, col);
      }
      i2++;
    }
    while (i2 < upper_bound) {
      const { row, col } = getColumnRow(i2, offset, this.shift_amount);
      if (output[i2].CONNECTED)
        this.prepareTransitioningComp(output[i2], 2, DESCENDING, row, col);
      else
        this.prepareTransitioningComp(output[i2], 1, DESCENDING, row, col);
      i2++;
    }
    while (i2 < output_length) {
      if (output[i2].CONNECTED) {
        const { row, col } = getColumnRow(i2, offset, this.shift_amount);
        this.prepareTransitioningComp(output[i2], 0, DESCENDING, row, col);
      }
      i2++;
    }
  }
  updateRefs(w_data, output) {
    const { limit, offset, output_length, active_window_start, upper_bound, direction } = w_data;
    this.ele.style.position = this.ele.style.position;
    if (this.USE_NULL_ELEMENT && this.NULL_ELEMENT_DISCONNECTED && upper_bound - active_window_start == 0) {
      this.dom_comp[0].ele.parentElement.insertBefore(this.ele, this.dom_comp[0].ele);
      this.NULL_ELEMENT_DISCONNECTED = false;
    }
    this.dom_comp.length = 0;
    for (let i2 = active_window_start; i2 < upper_bound; i2++)
      this.dom_comp.push(output[i2]);
    if (this.USE_NULL_ELEMENT && this.dom_comp.length > 0) {
      this.first_dom_element = this.dom_comp[0].ele;
      this.last_dom_element = this.dom_comp[this.dom_comp.length - 1].ele;
    }
  }
  append(appending_comp, append_before_ele) {
    if (this.USE_NULL_ELEMENT) {
      if (!this.NULL_ELEMENT_DISCONNECTED) {
        appending_comp.appendToDOM(this.ele.parentElement, this.ele, false);
        this.ele.parentElement.removeChild(this.ele);
        this.first_dom_element = appending_comp.ele;
        this.last_dom_element = appending_comp.ele;
        this.NULL_ELEMENT_DISCONNECTED = true;
      } else {
        if (!append_before_ele) {
          append_before_ele = this.last_dom_element;
          this.last_dom_element = appending_comp.ele;
          appending_comp.appendToDOM(this.parent.ele, append_before_ele, true);
        } else {
          appending_comp.appendToDOM(this.parent.ele, append_before_ele);
        }
      }
    } else {
      appending_comp.appendToDOM(this.ele, append_before_ele);
    }
  }
  appendToDOM(w_data, output) {
    const { limit, offset, output_length, active_window_start } = w_data;
    let j2 = active_window_start;
    let upper_bound = Math.min(active_window_start + limit, output_length);
    let i2 = Math.min(active_window_start, output_length);
    while (i2 < upper_bound)
      output[i2].index = i2++;
    for (let i3 = 0; i3 < this.dom_comp.length && j2 < upper_bound; i3++) {
      const as = this.dom_comp[i3];
      while (j2 < upper_bound && output[j2].CONNECTED)
        j2++;
      while (j2 < as.index && j2 < upper_bound) {
        const os = output[j2];
        os.index = -1;
        this.append(os, as.ele);
        j2++;
      }
    }
    while (j2 < upper_bound) {
      this.append(output[j2]);
      output[j2].index = -1;
      j2++;
    }
    return j2;
  }
  removeFromDOM() {
    for (const component of this.components_pending_removal) {
      component.par = null;
      component.removeFromDOM();
    }
    this.components_pending_removal.length = 0;
  }
  mutateDOM(w_data, transition, output = this.activeComps, NO_TRANSITION = false) {
    let OWN_TRANSITION = false;
    if (!transition)
      transition = createTransition(), OWN_TRANSITION = true;
    this.arrange(w_data, output, transition);
    this.appendToDOM(w_data, output);
    this.updateRefs(w_data, output);
    this.primeTransitions(transition);
    if (OWN_TRANSITION) {
      if (!rt.glow || NO_TRANSITION) {
        this.removeFromDOM();
      } else {
        transition.asyncPlay().then(this.removeFromDOM.bind(this));
      }
    }
    return transition;
  }
  primeTransitions(transition) {
    for (const { TYPE, row, col, DESCENDING, comp } of this.transition_list)
      switch (TYPE) {
        case 1:
          comp.transitionIn(row, col, DESCENDING, transition);
          break;
        case 0:
          comp.transitionOut(row, col, DESCENDING, transition);
          break;
        case 2:
          comp.arrange(row, col, transition);
          break;
      }
    this.transition_list.length = 0;
  }
  limitExpressionUpdate(transition) {
    this.mutateDOM(this.getWindowData(), transition);
    this.offset_diff = 0;
  }
  filterExpressionUpdate(transition) {
    this.updateFilter();
    this.limitExpressionUpdate(transition);
  }
  updateFilter() {
    this.activeComps.length = 0;
    if (this.filter) {
      for (const comp of this.comps) {
        if (!this.filter(comp.container_model)) {
          if (comp.CONNECTED) {
            this.components_pending_removal.push(comp);
          }
        } else {
          this.activeComps.push(comp);
        }
      }
    } else {
      this.activeComps.push(...this.comps);
    }
    if (this.sort)
      this.activeComps.sort(this.sort);
    this.UPDATE_FILTER = false;
    return this.activeComps;
  }
  setFilter(value) {
    if (typeof value == "function")
      this.filter = value;
  }
  setSort(value) {
    if (typeof value == "function")
      this.sort = value;
  }
  updateScrub(value) {
    if (typeof value == "number" && value != 0)
      this.scrub(value);
    else if (value === null && this.SCRUBBING) {
      this.AUTO_SCRUB = true;
      this.scheduledUpdate();
    }
  }
  updateLimit(value) {
    let numeric = parseInt(value.toString());
    if (numeric) {
      numeric = Math.max(0, numeric);
      if (this.limit != numeric) {
        this.limit = numeric;
        spark_default2.queueUpdate(this);
      }
    } else {
      this.limit = Infinity;
      spark_default2.queueUpdate(this);
    }
  }
  updateShift(value) {
    if (typeof value == "number" && this.shift_amount != value) {
      this.shift_amount = value;
      spark_default2.queueUpdate(this);
    }
  }
  updateOffset(value) {
    if (typeof value == "number" && this.offset != value) {
      this.offset = value;
      spark_default2.queueUpdate(this);
    }
  }
  scheduledUpdate() {
    if (this.SCRUBBING) {
      if (!this.AUTO_SCRUB) {
        this.SCRUBBING = false;
        return;
      }
      if (Math.abs(this.scrub_velocity) > 1e-4) {
        if (this.scrub(this.scrub_velocity)) {
          this.scrub_velocity *= this.drag;
          let pos = this.offset + this.scrub_velocity;
          if (pos < 0 || pos > this.max)
            this.scrub_velocity = 0;
          spark_default2.queueUpdate(this);
        }
      } else {
        this.scrub_velocity = 0;
        this.scrub(Infinity);
        this.SCRUBBING = false;
      }
    } else {
      this.filterExpressionUpdate();
    }
  }
  filter_new_items(new_items = []) {
    const transition = createTransition();
    if (new_items.length == 0) {
      const sl = this.activeComps.length;
      if (this.USE_NULL_ELEMENT && this.NULL_ELEMENT_DISCONNECTED)
        this.first_dom_element.parentElement.insertBefore(this.first_dom_element, this.ele);
      for (let i2 = 0; i2 < sl; i2++) {
        const { row, col } = getColumnRow(i2, this.offset, this.shift_amount);
        this.prepareTransitioningComp(this.activeComps[i2], 0, false, row, col);
      }
      this.comps.length = 0;
      this.activeComps.length = 0;
      this.primeTransitions(transition);
      if (!this.SCRUBBING)
        transition.play();
    } else {
      const exists = new Map(new_items.map((e) => [e, true])), out = [];
      for (let i2 = 0, l = this.activeComps.length; i2 < l; i2++)
        if (exists.has(this.activeComps[i2].container_model))
          exists.set(this.activeComps[i2].container_model, false);
      for (let i2 = 0, l = this.comps.length; i2 < l; i2++)
        if (!exists.has(this.comps[i2].container_model)) {
          this.prepareTransitioningComp(this.comps[0], 0, false, -1, -1);
          this.comps[i2].index = -1;
          this.comps.splice(i2, 1);
          l--;
          i2--;
        } else
          exists.set(this.comps[i2].container_model, false);
      exists.forEach((v, k) => {
        if (v)
          out.push(k);
      });
      if (out.length > 0) {
        this._add(out, transition);
      } else {
        for (let i2 = 0, j2 = 0, l = this.activeComps.length; i2 < l; i2++, j2++) {
          if (this.activeComps[i2]._TRANSITION_STATE_) {
            if (j2 !== i2) {
              const { row, col } = getColumnRow(i2, this.offset, this.shift_amount);
              this.activeComps[i2].arrange(row, col, transition);
            }
          } else
            this.activeComps.splice(i2, 1), i2--, l--;
        }
      }
      this.scheduledUpdate();
    }
  }
  addEvaluator(evaluator, index) {
    this.evaluators[index] = evaluator;
  }
  _add(items, transition) {
    let OWN_TRANSITION = false, cstr_l = this.comp_constructors.length;
    if (!transition)
      OWN_TRANSITION = true;
    for (const item of items) {
      let component = null;
      if (item instanceof WickRTComponent) {
        component = item;
      } else {
        for (let j2 = 0; j2 < cstr_l; j2++) {
          const evaluator = this.evaluators[j2];
          if (j2 == cstr_l - 1 || evaluator && evaluator(item)) {
            component = new this.comp_constructors[j2](null, null, [this.parent]);
            component.hydrate().initialize(item);
            component.disconnect();
            const attrib_list = this.comp_attributes[j2];
            if (attrib_list)
              for (const [key, value] of attrib_list) {
                if (!key)
                  continue;
                if (key == "class") {
                  if (value)
                    component.ele.classList.add(...value.split(" "));
                } else
                  component.ele.setAttribute(key, value ?? "");
              }
            component.container_model = item;
            break;
          }
        }
      }
      if (component) {
        component.par = this.parent;
        this.comps.push(component);
      }
    }
    if (OWN_TRANSITION)
      this.filterExpressionUpdate(transition);
  }
};

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/component/html.ts
function* getComponentNames(ele) {
  const len = ele.classList.length;
  for (let i2 = 0; i2 < len; i2++)
    if (String_Is_Wick_Hash_ID(ele.classList[i2]))
      yield ele.classList[i2];
}
var comp_name_regex = /W[_\$a-zA-Z0-9]+/;
function String_Is_Wick_Hash_ID(str) {
  return !!str.match(comp_name_regex);
}
function Element_Is_Wick_Component(ele) {
  return ele && ele.hasAttribute("w:c") && [...getComponentNames(ele)].length > 0;
}
function Element_Is_Wick_Template(ele) {
  return ele && ele.tagName == "TEMPLATE" && ele.hasAttribute("w:c") && String_Is_Wick_Hash_ID(ele.id + "");
}
function hydrateComponentElements(pending_component_elements) {
  const components = [];
  for (const hydrate_candidate of pending_component_elements) {
    components.push(hydrateComponentElement(hydrate_candidate));
  }
  return components.filter((i2) => i2 !== null);
}
function hydrateComponentElement(hydrate_candidate, parent_chain = [], existing_comp) {
  let names = getComponentNames(hydrate_candidate), affinity = 0;
  const u = void 0;
  let first_comp = null;
  for (const component_name of names) {
    const comp_class = rt.gC(component_name);
    if (comp_class) {
      if (!first_comp && existing_comp) {
        first_comp = existing_comp;
        parent_chain = parent_chain.concat(first_comp);
        affinity++;
      } else {
        let comp = new comp_class(hydrate_candidate, u, parent_chain, u, u, affinity++);
        comp.hydrate();
        parent_chain = parent_chain.concat(comp);
        if (!first_comp)
          first_comp = comp;
      }
    } else
      console.warn(`WickRT :: Could not find component data for ${component_name}`);
  }
  return first_comp;
}
function hydrateContainerElement(ele, parent, null_elements = []) {
  const comp_constructors = ele.getAttribute("w:ctr").split(" ").map((name2) => parent.context.component_class.get(name2)), comp_attributes = (ele.getAttribute("w:ctr-atr") ?? "").split(":").map((e) => e.split(";").map((e2) => e2.split("=")));
  if (comp_constructors.length < 1)
    throw new Error(`Could not find component class for ${name} in component ${parent.name}`);
  const ctr = new WickContainer(comp_constructors, comp_attributes, ele, parent, null_elements);
  parent.ctr.push(ctr);
}

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/component/component.ts
var DATA_DIRECTION;
(function(DATA_DIRECTION2) {
  DATA_DIRECTION2[DATA_DIRECTION2["DOWN"] = 1] = "DOWN";
  DATA_DIRECTION2[DATA_DIRECTION2["UP"] = 2] = "UP";
})(DATA_DIRECTION || (DATA_DIRECTION = {}));
var ComponentFlag;
(function(ComponentFlag2) {
  ComponentFlag2[ComponentFlag2["CONNECTED"] = 1] = "CONNECTED";
  ComponentFlag2[ComponentFlag2["TRANSITIONED_IN"] = 2] = "TRANSITIONED_IN";
  ComponentFlag2[ComponentFlag2["DESTROY_AFTER_TRANSITION"] = 4] = "DESTROY_AFTER_TRANSITION";
})(ComponentFlag || (ComponentFlag = {}));
var WickRTComponent = class {
  constructor(existing_element = null, wrapper = null, parent_chain = [], default_model_name = "", context = rt.context, element_affinity = 0) {
    this.name = this.constructor.name;
    this.ci = 0;
    this.ch = [];
    this.elu = [];
    this.ctr = [];
    this.pui = [];
    this.nui = [];
    this.model = null;
    this.call_set = new Map();
    this.binding_call_set = [];
    this.updated_attributes = new Set();
    this.update_state = 0;
    this.active_flags = 0;
    this.call_depth = 0;
    this.affinity = element_affinity;
    this.ALLOW_UPDATE = true;
    this.CONNECTED = false;
    this.INITIALIZED = false;
    this.TRANSITIONED_IN = false;
    this.DESTROY_AFTER_TRANSITION = false;
    this.up = this.updateParent;
    this.spm = this.syncParentMethod;
    this.pup = this.updateFromChild;
    this.ufp = this.updateFromParent;
    this._SCHD_ = 0;
    this.polling_id = -1;
    this.context = context;
    const parent = parent_chain[parent_chain.length - 1];
    if (parent)
      parent.addChild(this);
    if (default_model_name) {
      if (!context.models[default_model_name])
        context.models[default_model_name] = {};
      this.model = context.models[default_model_name];
    }
    this.wrapper = wrapper;
    if (existing_element) {
      this.ele = existing_element;
      this.integrateElement(existing_element, true, parent_chain.concat(this));
    } else
      this.ele = this.createElement(context, [this]);
    this.ele.setAttribute("wrt:c", this.name);
    this.init_interfaces(this);
  }
  init_interfaces() {
  }
  initialize(model = this.model) {
    if (this.INITIALIZED)
      return this;
    this.INITIALIZED = true;
    this.model = model;
    this.init(this);
    for (const child of this.ch)
      child.initialize();
    this.async_init();
    this.setModel(model);
    return this;
  }
  hydrate() {
    const context = this.context, wrapper = this.wrapper;
    if (wrapper && this.wrapper) {
      this.ele.appendChild(this.wrapper.ele);
      this.wrapper.setModel({ comp: this });
    } else if (context.wrapper && this.name !== context.wrapper.name) {
      this.wrapper = new (context.component_class.get(context.wrapper.name))({ comp: this });
      this.ele.appendChild(this.wrapper.ele);
    }
    try {
      this.c();
    } catch (e) {
      console.error(e);
    }
    rt.OVERRIDABLE_onComponentCreate(this);
    for (const child of this.ch)
      child.hydrate();
    return this;
  }
  destructor() {
    if (this.model)
      this.setModel(null);
    if (this.wrapper)
      this.wrapper.destructor();
    if (this.par)
      this.par.removeChild(this);
    this.removeCSS();
  }
  removeChild(cp) {
    if (cp.par == this) {
      this.ch = this.ch.filter((c) => c !== cp);
      cp.par = null;
    }
  }
  addChild(cp) {
    for (const ch of this.ch)
      if (ch == cp)
        continue;
    cp.par = this;
    this.ch.push(cp);
  }
  connect() {
    this.CONNECTED = true;
    this.ALLOW_UPDATE = true;
    for (const child of this.ch)
      child.connect();
    this.onModelUpdate();
  }
  disconnect() {
    for (const child of this.ch)
      child.disconnect();
    this.ALLOW_UPDATE = false;
    this.CONNECTED = false;
  }
  ce() {
    if (rt.templates.has(this.name)) {
      const template = rt.templates.get(this.name);
      if (template) {
        const doc = template.content.cloneNode(true), ele = doc.firstElementChild;
        this.integrateElement(ele);
        return ele;
      }
    }
    throw new Error("WickRT :: NO template element for component: " + this.name);
  }
  removeCSS() {
    const cache = this.context.css_cache.get(this.name);
    if (cache) {
      cache.count--;
      if (cache.count <= 0) {
        cache.css_ele.parentElement.removeChild(cache.css_ele);
        this.context.css_cache.delete(this.name);
      }
    }
  }
  setCSS(style_string = this.getCSS()) {
    if (style_string) {
      if (!this.context.css_cache.has(this.name)) {
        const { window: { document: document2 }, css_cache } = this.context, css_ele = document2.createElement("style");
        css_ele.innerHTML = style_string;
        document2.head.appendChild(css_ele);
        css_cache.set(this.name, { css_ele, count: 1 });
      } else
        this.context.css_cache.get(this.name).count++;
      this.ele.classList.add(this.name);
    }
  }
  appendToDOM(parent_element, other_element = null, INSERT_AFTER = false) {
    this.connecting();
    this.connect();
    if (this.ele) {
      if (other_element) {
        if (!INSERT_AFTER)
          other_element.parentElement?.insertBefore(this.ele, other_element);
        else {
          if (other_element.nextElementSibling)
            other_element.parentElement?.insertBefore(this.ele, other_element.nextElementSibling);
          else
            other_element.parentElement?.appendChild(this.ele);
        }
      } else {
        parent_element.appendChild(this.ele);
      }
    }
    this.connected();
  }
  removeFromDOM() {
    if (this.CONNECTED == false)
      return;
    this.disconnecting();
    if (this.ele && this.ele.parentElement && !this.par)
      this.ele.parentElement.removeChild(this.ele);
    this.disconnect();
    this.disconnected();
  }
  oTI(row, col, DESCENDING, trs) {
  }
  oTO(row, col, DESCENDING, trs) {
  }
  aRR(row, col, trs) {
  }
  onTransitionOutEnd() {
    if (!this.TRANSITIONED_IN) {
      if (this.DESTROY_AFTER_TRANSITION)
        this.destructor();
      this.DESTROY_AFTER_TRANSITION = false;
    }
    this.out_trs = null;
    return false;
  }
  transitionOut(row, col, DESCENDING, transition = null, DESTROY_AFTER_TRANSITION = false) {
    for (const ch of this.ch)
      ch.transitionOut(row, col, DESCENDING, transition, false);
    this.DESTROY_AFTER_TRANSITION = DESTROY_AFTER_TRANSITION;
    this.TRANSITIONED_IN = false;
    let transition_time = 0;
    if (transition) {
      this.oTO(row, col, DESCENDING, transition.out);
      transition.addEventListener("stopped", this.onTransitionOutEnd.bind(this));
      try {
        transition_time = transition.out_duration;
      } catch (e) {
        console.log(e);
      }
    } else if (!this.out_trs)
      this.onTransitionOutEnd();
    transition_time = Math.max(transition_time, 0);
    return transition_time;
  }
  se(index, ele) {
    if (!this.elu[index])
      this.elu[index] = [];
    this.elu[index].push(ele);
  }
  re(index, ele) {
    if (!this.elu[index])
      return;
    this.elu[index] = this.elu[index].filter((e) => e != ele);
  }
  arrange(row, col, trs) {
    this.aRR(row, col, trs.in);
  }
  transitionIn(row, col, DESCENDING, trs) {
    for (const ch of this.ch)
      ch.transitionIn(row, col, DESCENDING, trs);
    try {
      this.oTI(row, col, DESCENDING, trs.in);
      this.TRANSITIONED_IN = true;
    } catch (e) {
      console.log(e);
    }
  }
  setModel(model) {
    if (this.model && model != this.model) {
      if (this.polling_id >= 0) {
        clearInterval(this.polling_id);
        this.polling_id = -1;
      }
      if (this.model.unsubscribe)
        this.model.unsubscribe(this);
      this.model = null;
    }
    if (model) {
      this.model = model;
      if (typeof model.subscribe == "function") {
        model.subscribe(this);
      } else {
        if (this.polling_id < 0)
          this.polling_id = setInterval(this.onModelUpdate.bind(this), 1e3 / 15);
        this.onModelUpdate(model);
      }
    }
  }
  removeModel() {
    this.setModel(null);
  }
  onModelUpdate(model = this.model, flags = BINDING_FLAG.ALLOW_UPDATE_FROM_MODEL | BINDING_FLAG.DEFAULT_BINDING_STATE) {
    if (!this.ALLOW_UPDATE)
      return;
    if (model) {
      this.update(model, flags);
      this.updateChildrenWithModel(model);
    }
  }
  updateChildrenWithModel(model) {
    for (const child of this.ch)
      child.onModelUpdate(model, BINDING_FLAG.ALLOW_UPDATE_FROM_MODEL | BINDING_FLAG.FROM_PARENT | BINDING_FLAG.DEFAULT_BINDING_STATE);
  }
  update(data, flags = 1, IMMEDIATE = false) {
    if (!this.ALLOW_UPDATE)
      return;
    for (const name2 in data) {
      const val = data[name2];
      if (typeof val !== "undefined" && this.nlu) {
        const index = this.nlu[name2];
        if (flags && (index >>> 24 & flags) == flags)
          this.ua(index & 16777215, val);
      }
    }
    for (const [call_id, args] of this.clearActiveCalls())
      this.lookup_function_table[call_id].call(this, ...args);
    if (IMMEDIATE)
      this.scheduledUpdate(0, 0);
  }
  ua(attribute_index, attribute_value, RETURN_PREVIOUS_VAL = false) {
    const comp = this;
    const prev_val = comp[attribute_index];
    if (attribute_value !== prev_val) {
      comp[attribute_index] = attribute_value;
      if (!this.call_set.has(attribute_index) && this.lookup_function_table[attribute_index]) {
        this.lookup_function_table[attribute_index].call(this, this.call_depth);
      }
    }
    return RETURN_PREVIOUS_VAL ? prev_val : comp[attribute_index];
  }
  fua(attribute_index, attribute_value, RETURN_PREVIOUS_VAL = false) {
    const comp = this;
    const prev_val = comp[attribute_index];
    if (!this.call_set.has(attribute_index) && this.lookup_function_table[attribute_index])
      this.call_set.set(attribute_index, [this.active_flags, this.call_depth]);
    comp[attribute_index] = attribute_value;
    spark_default2.queueUpdate(this, 0, 0, true);
    return RETURN_PREVIOUS_VAL ? prev_val : comp[attribute_index];
  }
  u(flags, call_depth = this.call_depth) {
    const pending_function_indices = this.updated_attributes.values();
    this.updated_attributes.clear();
    for (const index of pending_function_indices) {
      if (this.lookup_function_table[index])
        this.call_set.set(index, [flags, call_depth]);
    }
    spark_default2.queueUpdate(this);
  }
  check(...ids) {
    const comp = this;
    for (const id2 of ids)
      if (typeof comp[id2] == "undefined")
        return false;
    return true;
  }
  syncParentMethod(this_index, parent_method_index, child_index) {
    this.ci = child_index;
    this.pui[this_index] = this.par["u" + parent_method_index];
  }
  updateFromParent(local_index, attribute_value, flags) {
    if (flags >> 24 == this.ci + 1)
      return;
    this.active_flags |= BINDING_FLAG.FROM_PARENT;
    this.ua(local_index, attribute_value);
  }
  updateParent(data) {
    if (this.par)
      this.updateFromChild.call(this.par, data);
  }
  updateFromChild(data) {
    for (const key in data) {
      const val = data[key];
      if (typeof val !== "undefined" && this.nlu) {
        const index = this.nlu[key];
        if (index >>> 24 & BINDING_FLAG.ALLOW_UPDATE_FROM_CHILD) {
          let cd = this.call_depth;
          this.call_depth = 0;
          this.ua(index & 16777215, val);
          this.call_depth = cd;
        }
      }
    }
  }
  scheduledUpdate(step_ratio, diff) {
    this.call_depth = 1;
    for (const [calls_id, depth] of this.clearActiveBindingCalls()) {
      this.lookup_function_table[calls_id].call(this, depth);
      this.call_depth = 0;
      this.active_flags = 0;
    }
    for (const [call_id, args] of this.clearActiveCalls()) {
      this.lookup_function_table[call_id].call(this, ...args);
      this.call_depth = 0;
      this.active_flags = 0;
    }
  }
  clearActiveBindingCalls() {
    if (this.binding_call_set.length == 0)
      return [];
    const data = this.binding_call_set.slice();
    this.binding_call_set.length = 0;
    return data;
  }
  clearActiveCalls() {
    if (this.call_set.size == 0)
      return [];
    const data = [...this.call_set.entries()];
    this.call_set.clear();
    return data;
  }
  runActiveCalls() {
  }
  call(pending_function_index, call_depth = 0) {
    for (const [index] of this.binding_call_set)
      if (index == pending_function_index)
        return;
    this.lookup_function_table[pending_function_index].call(this, call_depth);
  }
  c() {
  }
  init(c) {
  }
  async_init() {
  }
  onMounted() {
  }
  getCSS() {
    return "";
  }
  integrateElement(ele, root2 = true, component_chain = [this]) {
    let sk = 0, PROCESS_CHILDREN = true;
    let scope_component = this;
    if (root2) {
      ele.classList.add(this.name);
      this.ele = ele;
      ele.wick_component = this;
      if (ele.hasAttribute("w:ctr")) {
        ({ sk, PROCESS_CHILDREN } = process_container(ele, scope_component, sk, PROCESS_CHILDREN));
      }
      this.se(0, ele);
    } else {
      if (ele.hasAttribute("w:own")) {
        if (+(ele.getAttribute("w:own") || -1) != this.affinity)
          return 0;
      }
      if (ele.tagName == "W-E") {
        const child = ele.children[0];
        this.integrateElement(child, false, component_chain);
        if (ele.hasAttribute("w:u"))
          this.se(parseInt(ele.getAttribute("w:u") || "0"), child);
        ele.replaceWith(child);
        return 0;
      } else if (ele.tagName == "W-B") {
        const text = document.createTextNode(ele.innerHTML);
        ele.replaceWith(text);
        if (ele.hasAttribute("w:u"))
          this.se(parseInt(ele.getAttribute("w:u") || "0"), text);
        ele = text;
        return 0;
      } else {
        if (ele.tagName == "A")
          rt.context.processLink(ele);
        if (ele.hasAttribute("w:o")) {
          if (this.par)
            this.par.se(+ele.hasAttribute("w:o"), ele);
          iterateElementChildren(ele, this.par, component_chain);
          return 0;
        } else if (ele.hasAttribute("w:r")) {
          const index = +(ele.getAttribute("w:r") || -1), lu_index = index % 50, comp_index = index / 50 | 0;
          scope_component = component_chain[comp_index];
          scope_component.se(lu_index, ele);
        }
        if (ele.hasAttribute("w:ctr"))
          ({ sk, PROCESS_CHILDREN } = process_container(ele, scope_component, sk, PROCESS_CHILDREN));
        else if (ele.hasAttribute("w:c") && this.ele !== ele) {
          hydrateComponentElement(ele, component_chain);
          PROCESS_CHILDREN = false;
        }
      }
      if (ele.hasAttribute("w:u"))
        this.se(parseInt(ele.getAttribute("w:u") || "0"), ele);
    }
    if (PROCESS_CHILDREN)
      iterateElementChildren(ele, scope_component, component_chain);
    return sk;
  }
  ue(element_index, data) {
    for (let ele of this.elu[element_index] ?? []) {
      if (data instanceof HTMLElement) {
        this.re(element_index, ele);
        this.se(element_index, data);
        if (ele.parentElement)
          ele.parentElement.replaceChild(data, ele);
        continue;
      } else if (!(ele instanceof Text)) {
        let node = new Text();
        this.re(element_index, ele);
        this.se(element_index, node);
        if (ele.parentElement)
          ele.parentElement.replaceChild(node, ele);
        ele = node;
      }
      ;
      ele.data = data;
    }
  }
  sa(ele_index, attribute_name, attribute_value) {
    for (const ele of this.elu[ele_index] ?? []) {
      if (attribute_name == "value")
        ele.value = attribute_value;
      else
        ele.setAttribute(attribute_name, attribute_value);
    }
  }
  al(ele_index, event_specifier, listener_function, REQUIRES_THIS_BINDING = false) {
    for (const ele of this.elu[ele_index] ?? []) {
      const fn = REQUIRES_THIS_BINDING ? listener_function.bind(this) : listener_function;
      ele.addEventListener(event_specifier, fn);
    }
  }
  makeElement(ele_obj, name_space = "") {
    const temp_ele = document.createElement("div");
    temp_ele.innerHTML = ele_obj;
    return temp_ele.firstElementChild;
  }
  createElement(context, parent_chain) {
    const ele = this.ce();
    hydrateComponentElement(ele, parent_chain, this);
    this.integrateElement(ele, true, parent_chain);
    return ele;
  }
  connecting() {
  }
  connected() {
  }
  disconnecting() {
  }
  disconnected() {
  }
};
function process_container(ele, scope_component, sk, PROCESS_CHILDREN) {
  const null_count = parseInt(ele.getAttribute("null") || "0") || 0, null_elements = [];
  if (null_count > 0) {
    let prev = ele;
    for (let i2 = 0; i2 < null_count; i2++) {
      null_elements.push(prev.nextElementSibling);
      prev = null_elements[i2];
    }
  }
  hydrateContainerElement(ele, scope_component, null_elements);
  sk = null_count;
  PROCESS_CHILDREN = false;
  return { sk, PROCESS_CHILDREN };
}
function iterateElementChildren(ele, scope_component, component_chain) {
  let skip_count = 0;
  for (const child of Array.from(ele.children) || []) {
    if (skip_count-- > 0)
      continue;
    skip_count = scope_component.integrateElement(child, false, component_chain);
  }
}

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/load_modules.ts
async function loadModules(incoming_options, extant_presets) {
  for (const [id2, url] of incoming_options?.repo ?? []) {
    if (extant_presets.api) {
      if (!extant_presets.api[id2]) {
        try {
          const uri = uri_default2.resolveRelative(url);
          const mod = await import(uri + "");
          if (uri.file == "pack.js") {
            extant_presets.api[id2] = {
              default: mod[id2]?.default,
              module: mod[id2]
            };
          } else {
            extant_presets.api[id2] = {
              default: mod.default ?? null,
              module: mod
            };
          }
          ;
        } catch (e) {
          console.warn(new Error(`Could not load module ${url}`));
          console.error(e);
        }
      }
    }
  }
}

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/base.ts
var _SealedProperty_ = (object, name2, value) => Object.defineProperty(object, name2, { value, configurable: false, enumerable: false, writable: true });
var _FrozenProperty_ = (object, name2, value) => Object.defineProperty(object, name2, { value, configurable: false, enumerable: false, writable: false });
var ObservableBase = class {
  constructor() {
    _SealedProperty_(this, "OBSERVABLE", true);
    _SealedProperty_(this, "_SCHD_", 0);
    _SealedProperty_(this, "_cv_", []);
    _SealedProperty_(this, "fv", null);
    _SealedProperty_(this, "par", null);
    _SealedProperty_(this, "prop_name", "");
    _SealedProperty_(this, "observers", []);
  }
  destroy() {
    var view = this.fv;
    while (view) {
      let nx = view.nx;
      view.unsetModel();
      view = nx;
    }
    this._cv_.length = 0;
  }
  setHook(prop_name, data) {
    return data;
  }
  getHook(prop_name, data) {
    return data;
  }
  scheduleUpdate(changed_value) {
    if (this.par)
      this.par.scheduleUpdate();
    if (this.observers.length == 0)
      return;
    if (changed_value)
      this._cv_.push(changed_value);
    spark_default2.queueUpdate(this);
  }
  subscribe(view) {
    if (this.observers.indexOf(view) >= 0)
      return false;
    this.observers.push(view);
    view.onModelUpdate(this);
    return true;
  }
  unsubscribe(view) {
    if (this.observers.indexOf(view) >= 0) {
      this.observers.splice(this.observers.indexOf(view), 1);
      return true;
    }
    return false;
  }
  scheduledUpdate(step) {
    this.updateViews();
  }
  updateViews() {
    for (const view of this.observers)
      view.onModelUpdate(this);
    return;
  }
  toJSON(host) {
    return JSON.stringify(this, null, "	");
  }
  set(data) {
    return false;
  }
};

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/scheme/scheme_constructor.ts
var SchemeConstructor = class {
  constructor() {
    this.start_value = void 0;
  }
  parse(value) {
    return value;
  }
  verify(value, result) {
    result.valid = true;
  }
  filter(id2, filters) {
    for (let i2 = 0, l = filters.length; i2 < l; i2++)
      if (id2 === filters[i2])
        return true;
    return false;
  }
  string(value) {
    return value + "";
  }
};

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/container_base.ts
var EmptyFunction = () => {
};
var ObservableContainerBase = class extends ObservableBase {
  constructor(data = []) {
    super();
    _SealedProperty_(this, "source", null);
    _SealedProperty_(this, "first_link", null);
    _SealedProperty_(this, "pin", EmptyFunction);
    _SealedProperty_(this, "next", null);
    _SealedProperty_(this, "prev", null);
    _SealedProperty_(this, "_filters_", null);
    this.validator = new SchemeConstructor();
    return this;
  }
  setByIndex(index, m) {
  }
  getByIndex(index, value) {
  }
  destroy() {
    this._filters_ = null;
    if (this.source) {
      this.source.__unlink__(this);
    }
    super.destroy();
  }
  get length() {
    return 0;
  }
  set length(e) {
  }
  __defaultReturn__(USE_ARRAY) {
    return this;
  }
  push(...item) {
    item.forEach((item2) => {
      if (item2 instanceof Array)
        item2.forEach((i2) => {
          this.insert(i2);
        });
      else
        this.insert(item2);
    });
  }
  get(term, __return_data__) {
    let out = null;
    term = this.getHook("term", term);
    let USE_ARRAY = __return_data__ === null ? false : true;
    if (term) {
      if (__return_data__) {
        out = __return_data__;
      } else {
        if (!this.source)
          USE_ARRAY = false;
        out = this.__defaultReturn__(USE_ARRAY);
        out.__setFilters__(term);
      }
    } else
      out = __return_data__ ? __return_data__ : this.__defaultReturn__(USE_ARRAY);
    if (!term)
      this.__getAll__(out);
    else {
      let terms = term;
      if (!Array.isArray(term))
        terms = [term];
      terms = terms.map((t) => this.validator.parse(t));
      this.__get__(terms, out);
    }
    return out;
  }
  set(item) {
    this.insert(item);
    return false;
  }
  insert(item) {
    item = this.setHook("", item);
    let add_list = this.fv ? [] : null;
    let out_data = false;
    if (Array.isArray(item)) {
      for (let i2 = 0; i2 < item.length; i2++)
        if (this.__insertSub__(item[i2], out_data, add_list))
          out_data = true;
    } else if (item)
      out_data = this.__insertSub__(item, out_data, add_list);
    if (out_data) {
      if (this.par)
        this.par.scheduleUpdate(this.prop_name);
      this.scheduleUpdate();
    }
    return out_data;
  }
  __insertSub__(item, out, add_list) {
    var identifier = this._gI_(item);
    if (identifier !== void 0) {
      if (item && typeof item == "object" && !(item instanceof ObservableBase) && this.model) {
        item = new this.model.constructor(item);
        item.par = this;
      }
      out = this.__insert__(item, add_list);
    }
    return out;
  }
  delete(term, from_root = false) {
    this.remove(term);
  }
  remove(term, from_root = false, __FROM_SOURCE__ = false) {
    if (!__FROM_SOURCE__ && this.source) {
      if (!term)
        return this.source.remove(this._filters_);
      else
        return this.source.remove(term);
    }
    let out_container = [];
    if (!term)
      this.__removeAll__();
    else {
      let terms = Array.isArray(term) ? term : [term];
      terms = terms.map((t) => t instanceof ObservableBase ? t : this.validator.parse(t));
      this.__remove__(terms, out_container);
    }
    if (out_container.length > 0) {
      if (out_container && out_container.length > 0) {
        this.updateViews();
        this.scheduleUpdate();
      }
    }
    return out_container;
  }
  cull(items) {
    let hash_table = {};
    let existing_items = this.__getAll__([]);
    let loadHash = (item) => {
      if (item instanceof Array)
        return item.forEach((e) => loadHash(e));
      let identifier = this._gI_(item);
      if (identifier !== void 0)
        hash_table[identifier] = item;
    };
    loadHash(items);
    for (let i2 = 0; i2 < existing_items.lenth; i2++) {
      let e_item = existing_items[i2];
      if (!existing_items[this._gI_(e_item)])
        this.__remove__(e_item);
    }
    this.insert(items);
  }
  __setFilters__(term) {
    if (!this._filters_)
      this._filters_ = [];
    if (Array.isArray(term))
      this._filters_ = this._filters_.concat(term.map((t) => this.validator.parse(t)));
    else
      this._filters_.push(this.validator.parse(term));
  }
  __filterIdentifier__(identifier, filters) {
    if (filters.length > 0) {
      return this.validator.filter(identifier, filters);
    }
    return true;
  }
  _gIf_(item, term) {
    let t = this._gI_(item, this._filters_);
  }
  _gI_(item, filters = null) {
    return item;
    let identifier;
    if (typeof item == "object" && this.key)
      identifier = item[this.key];
    else
      identifier = item;
    if (identifier && this.validator)
      identifier = this.validator.parse(identifier);
    if (filters && identifier)
      return this.__filterIdentifier__(identifier, filters) ? identifier : void 0;
    return identifier;
  }
  __insert__(item, add_list = this.fv ? [] : null) {
    return false;
  }
  __get__(item, __return_data__) {
    return __return_data__;
  }
  __getAll__(__return_data__) {
    return __return_data__;
  }
  __removeAll__() {
    return [];
  }
  __remove__(term, out_container = null) {
    return false;
  }
};
var proto = ObservableContainerBase.prototype;
_SealedProperty_(proto, "model", null);
_SealedProperty_(proto, "key", "");
_SealedProperty_(proto, "validator", null);

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/observable_array.ts
var ArrayContainerProxySettings = {
  set: function(obj, prop, val) {
    if (prop in obj && obj[prop] == val)
      return true;
    let property = obj[prop];
    if (property && typeof property == "object")
      property.set(val);
    else
      obj[prop] = val;
    obj.scheduleUpdate(prop);
    return true;
  },
  get: function(obj, prop, val) {
    if (prop in obj)
      return obj[prop];
    if (!isNaN(prop))
      return obj.data[prop];
    let term = {};
    term[obj.key] = prop;
    return obj.get(prop, [])[0];
  }
};
var ObservableArray = class extends ObservableContainerBase {
  constructor(data = []) {
    super();
    this.key = "";
    if (data[0] && data[0].model) {
      if (data[0].model)
        this.model = data[0].model;
      data = data.slice(1);
    }
    this.data = [];
    if (Array.isArray(data) && data.length > 0)
      this.insert(data);
    return this.proxy;
  }
  destroy() {
    this.data.length = 0;
    super.destroy();
  }
  get proxy() {
    return new Proxy(this, ArrayContainerProxySettings);
  }
  set proxy(v) {
  }
  get length() {
    return this.data.length;
  }
  set length(v) {
    let new_length = Math.min(Math.max(0, v), this.data.length);
    this.data.length = new_length;
    this.scheduleUpdate();
  }
  __defaultReturn__(USE_ARRAY) {
    return this;
  }
  __insert__(item, add_list) {
    this.data.push(item);
    if (add_list)
      add_list.push(item);
    return true;
  }
  getByIndex(i2) {
    return this.data[i2];
  }
  setByIndex(i2, m) {
    this.data[i2] = m;
  }
  __get__(term, return_data) {
    let terms = null;
    if (term)
      if (term instanceof Array)
        terms = term;
      else
        terms = [term];
    for (let i2 = 0, l = this.data.length; i2 < l; i2++) {
      let obj = this.data[i2];
      if (this._gI_(obj, terms)) {
        return_data.push(obj);
      }
    }
    return return_data;
  }
  __getAll__(return_data) {
    this.data.forEach((m) => {
      return_data.push(m);
    });
    return return_data;
  }
  __removeAll__() {
    let items = this.data.map((d) => d);
    this.data.length = 0;
    return items;
  }
  __remove__(term, out_container) {
    let result = false;
    term = term.map((t) => t instanceof ObservableBase ? this._gI_(t) : t);
    for (let i2 = 0, l = this.data.length; i2 < l; i2++) {
      var obj = this.data[i2];
      if (this._gI_(obj, term)) {
        result = true;
        this.data.splice(i2, 1);
        l--;
        i2--;
        out_container.push(obj);
        break;
      }
    }
    return result;
  }
  toJSON() {
    return JSON.stringify(this.data);
  }
  [Symbol.iterator]() {
    let i2 = -1;
    return {
      next: (done) => {
        if (i2 < this.data.length)
          return { value: this.data[++i2], done: i2 == this.data.length };
        return { value: null, done: true };
      }
    };
  }
  remove(i2) {
    if (i2 >= 0 && i2 < this.length) {
      this.data.splice(i2, 1);
      this.scheduleUpdate();
    }
  }
  splice(i2, remove_amount, ...items) {
    this.data.splice(i2, remove_amount, ...items);
    this.scheduleUpdate();
  }
  sort(fn) {
    this.data.sort(fn);
    this.scheduleUpdate();
  }
  indexOf(object) {
    return this.data.indexOf(object);
  }
  pop() {
    const v = this.data.pop();
    this.scheduleUpdate();
    return v;
  }
  shift() {
    const v = this.data.shift();
    this.scheduleUpdate();
    return v;
  }
  filter(fn) {
    return this.data.filter(fn);
  }
  map(fn) {
    return this.data.map(fn);
  }
  concat(...items) {
    const new_data = [...this.data];
    for (const item of items) {
      if (item instanceof ObservableArray) {
        new_data.push(...item.data);
      } else if (Array.isArray(item))
        new_data.push(...item);
      else
        new_data.push(item);
    }
    return new_data;
  }
  reduce(fn, val) {
    this.data.reduce(fn, val);
  }
};
Object.freeze(ObservableArray);

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/observable.ts
var ObservableData = class extends ObservableBase {
  constructor(data) {
    super();
    _SealedProperty_(this, "prop_array", []);
    _SealedProperty_(this, "prop_offset", 0);
    _SealedProperty_(this, "look_up", {});
    if (data)
      for (let name2 in data)
        this.createProp(name2, data[name2]);
    return this;
  }
  get proxy() {
    return this;
  }
  set(data, prop_name = "") {
    if (typeof data == "undefined")
      return false;
    let out = false;
    for (let prop_name2 in data) {
      let index = this.look_up[prop_name2];
      if (index !== void 0) {
        let prop = this.prop_array[index];
        if (typeof prop == "object") {
          if (prop.set(data[prop_name2], true)) {
            this.scheduleUpdate();
            out = true;
          }
        } else if (prop !== data[prop_name2]) {
          this.prop_array[index] = data[prop_name2];
          this.scheduleUpdate();
          out = true;
        }
      } else {
        this.createProp(prop_name2, data[prop_name2]);
        out = true;
      }
    }
    return out;
  }
  createProp(name2, value) {
    let index = this.prop_offset++;
    this.look_up[name2] = index;
    switch (typeof value) {
      case "object":
        if (value) {
          if (Array.isArray(value))
            this.prop_array.push(new ObservableArray(value));
          else {
            if (value instanceof ObservableBase)
              this.prop_array.push(value);
            else
              this.prop_array.push(new Observable(value));
          }
          this.prop_array[index].prop_name = name2;
          this.prop_array[index].par = this;
          Object.defineProperty(this, name2, {
            configurable: false,
            enumerable: true,
            get: function() {
              return this.getHook(name2, this.prop_array[index]);
            },
            set: (v) => {
            }
          });
          break;
        }
      default:
        this.prop_array.push(value);
        Object.defineProperty(this, name2, {
          configurable: false,
          enumerable: true,
          get: function() {
            return this.getHook(name2, this.prop_array[index]);
          },
          set: function(value2) {
            let val = this.prop_array[index];
            if (val !== value2) {
              this.prop_array[index] = this.setHook(name2, value2);
              this.scheduleUpdate(name2);
            }
          }
        });
    }
    this.scheduleUpdate();
  }
  scheduleUpdate() {
    if (this.par && this.par instanceof ObservableArray)
      this.par.scheduleUpdate();
    super.scheduleUpdate();
  }
  toJSON(HOST = true) {
    let data = {};
    for (let name2 in this.look_up) {
      let index = this.look_up[name2];
      let prop = this.prop_array[index];
      if (prop) {
        if (prop instanceof ObservableBase)
          data[name2] = prop.toJSON(false);
        else
          data[name2] = prop;
      }
    }
    return HOST ? JSON.stringify(data) : data.toString();
  }
};
function Observable(data) {
  if (Array.isArray(data))
    return new ObservableArray(data);
  return new ObservableData(data);
}

// ../../lib_candlelib_2022/packages/wick/source/typescript/client/runtime/observable/observable_prototyped.ts
function CreateSchemedProperty(object, scheme, schema_name, index) {
  if (object[schema_name])
    return;
  Object.defineProperty(object, schema_name, {
    configurable: false,
    enumerable: true,
    get: function() {
      return this.getHook(schema_name, this.prop_array[index]);
    },
    set: function(value) {
      let result = { valid: false };
      let val = scheme.parse(value);
      scheme.verify(val, result);
      if (result.valid && this.prop_array[index] != val) {
        this.prop_array[index] = this.setHook(schema_name, val);
        this.scheduleUpdate(schema_name);
        this._changed_ = true;
      }
    }
  });
}
function CreateModelProperty(object, model, schema_name, index) {
  Object.defineProperty(object, schema_name, {
    configurable: false,
    enumerable: true,
    get: function() {
      let m = this.prop_array[index];
      if (!m) {
        let address2 = this.address.slice();
        address2.push(index);
        m = new model(null, this.root, address2);
        m.par = this;
        m.prop_name = schema_name;
        m.MUTATION_ID = this.MUTATION_ID;
        this.prop_array[index] = m;
      }
      return this.getHook(schema_name, m);
    }
  });
}
var SchemedContainer = class extends ObservableArray {
  constructor(schema) {
    super(schema.self);
    if (schema.proto)
      for (let name2 in schema.proto)
        _SealedProperty_(this, name2, schema.proto[name2]);
  }
};
var ObservableScheme__ = class extends ObservableBase {
  constructor(data, _schema_ = null) {
    super();
    if (this.constructor === ObservableScheme__)
      this.constructor = class extends ObservableScheme__ {
      };
    if (!this.schema) {
      let schema = this.constructor.schema || _schema_;
      this.constructor.schema = schema;
      if (schema) {
        let __FinalConstructor__ = schema.__FinalConstructor__;
        let constructor = this.constructor;
        let prototype = constructor.prototype;
        if (!__FinalConstructor__) {
          let count = 0;
          let look_up = {};
          for (let schema_name in schema) {
            let scheme = schema[schema_name];
            if (schema_name == "self" && Array.isArray(scheme))
              return new SchemedContainer(schema, root, address);
            if (schema_name == "getHook") {
              prototype.getHook = scheme;
              continue;
            }
            if (schema_name == "setHook") {
              prototype.setHook = scheme;
              continue;
            }
            if (schema_name == "proto") {
              for (let name2 in schema.proto)
                _SealedProperty_(prototype, name2, schema.proto[name2]);
              continue;
            }
            if (typeof scheme == "function") {
              CreateModelProperty(prototype, scheme, schema_name, count);
            } else if (typeof scheme == "object") {
              if (Array.isArray(scheme)) {
                if (scheme[0] && scheme[0].container && scheme[0].schema)
                  CreateModelProperty(prototype, scheme[0], schema_name, count);
                else if (scheme[0] instanceof ObservableContainerBase)
                  CreateModelProperty(prototype, scheme[0].constructor, schema_name, count);
                else
                  CreateModelProperty(prototype, ObservableData, schema_name, count);
              } else if (scheme instanceof SchemeConstructor)
                CreateSchemedProperty(prototype, scheme, schema_name, count);
              else {
                CreateModelProperty(prototype, scheme.constructor, schema_name, count);
              }
            } else {
              console.warn(`Could not create property ${schema_name}.`);
              continue;
            }
            look_up[schema_name] = count;
            count++;
          }
          _SealedProperty_(prototype, "prop_offset", count);
          _SealedProperty_(prototype, "look_up", look_up);
          _SealedProperty_(prototype, "changed", false);
          Object.seal(constructor);
          schema.__FinalConstructor__ = constructor;
          return new schema.__FinalConstructor__(data);
        }
        _FrozenProperty_(prototype, "schema", schema);
      } else
        return new ObservableData(data);
    }
    Object.defineProperty(this, "prop_array", { value: new Array(this.prop_offset), enumerable: false, configurable: false, writable: true });
    if (data)
      this.set(data);
  }
  destroy() {
  }
  set(data) {
    if (!data)
      return false;
    this._changed_ = false;
    for (let prop_name in data) {
      let data_prop = data[prop_name];
      let index = this.look_up[prop_name];
      if (index !== void 0) {
        let prop = this[prop_name];
        if (typeof prop == "object") {
          if (prop.set(data_prop, true))
            this.scheduleUpdate(prop_name);
        } else {
          this[prop_name] = data_prop;
        }
      }
    }
    return this._changed_;
  }
  createProp() {
  }
};
ObservableScheme__.prototype.toJSON = ObservableData.prototype.toJSON;

// ../../lib_candlelib_2022/packages/wick/source/typescript/entry/wick-runtime.ts
var nop = (_) => true;
var wick_root = function() {
  console.warn("Wick.rt is incapable of compiling components. Use the full Wick library instead. \n	 A placeholder component will be generated instead.");
  const d = {
    mount: nop,
    get pending() {
      return d;
    },
    class: function() {
      this.ele = document.createElement("div");
      this.ele.innerHTML = "Wick.rt is incapable of compiling components, a dummy component has been generated instead.";
    },
    createInstance: nop
  };
  return d;
};
var wick = Object.assign(wick_root, {
  rt,
  setWrapper: nop,
  init_module_promise: null,
  objects: {
    WickRTComponent,
    Context,
    Observable,
    ObservableArray,
    ObservableScheme(obj) {
      return new ObservableScheme__(obj);
    }
  },
  async appendPresets(presets_options) {
    wick.rt.setPresets(presets_options);
    wick.init_module_promise = loadModules(presets_options, wick.rt.context);
    return wick.init_module_promise;
  },
  async hydrate() {
    window.addEventListener("load", async () => {
      if (wick.init_module_promise)
        await wick.init_module_promise;
      const elements = gatherWickElements();
      for (const comp of hydrateComponentElements(elements)) {
        comp.initialize();
        comp.connect();
        rt.root_components.push(comp);
      }
    });
  },
  toString() {
    return;
    `
      __           _    _ _____ _____  _   __      _   
     / _|         | |  | |_   _/  __ | | / /     | |  
  ___| |___      _| |  | | | | | /  /| |/ / _ __| |_ 
 / __|  _  / / / |/| | | | | |    |    | '__| __|
| (__| |   V  V /  /  /_| |_| __/| |   |  | |_ 
 ___|_|   _/_(_)/  / ___/ ____/_| _/_|   __|
 `;
  }
});
function gatherWickElements(dom = window.document.body) {
  const pending_elements_queue = [dom], pending_component_elements = [];
  while (pending_elements_queue.length > 0)
    for (const element of Array.from(pending_elements_queue.shift()?.children ?? []))
      if (element.nodeType == Node.ELEMENT_NODE)
        if (Element_Is_Wick_Template(element))
          rt.templates.set(element.id, element);
        else if (Element_Is_Wick_Component(element))
          pending_component_elements.push(element);
        else
          pending_elements_queue.push(element);
  return pending_component_elements;
}
var wick_runtime_default = wick;
globalThis["wick"] = wick;
export {
  glow_exports as MkQNge4iw,
  wick_runtime_exports as radiate
};
