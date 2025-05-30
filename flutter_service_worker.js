'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "68a13cc99fe1ca6b5e5a2dd23f773bae",
"index.html": "4449be8bee401f66dd4337f5d5642572",
"/": "4449be8bee401f66dd4337f5d5642572",
"main.dart.js": "0dc45a24bc054d50d1363b74a7455316",
"version.json": "cceae08420c183980c1ce2a87b0f655f",
"assets/assets/images/board_members_group_with_poster.jpeg": "b536c35c3d29d00007c877b1a85f00fb",
"assets/assets/images/home_page_board.jpg": "7e6a76370a2179e7ba68de5820a7df0d",
"assets/assets/images/Board%2520post.JPG": "1f558ef53a2cc074ed3d5c44c4969847",
"assets/assets/images/chairperson.JPG": "c82792653c93697a4d66937321e128ae",
"assets/assets/images/co_chairperson.JPG": "96f8974d55681b8f2527f7174a7c8e28",
"assets/assets/images/cosec.JPG": "5be6fb4fb7b787657058b70fd0f90ced",
"assets/assets/images/design_head.JPG": "695d3956895067a010afbdea44ea91e7",
"assets/assets/images/editorial.JPG": "fbd6a293d5eb30e3b165bf03d882fd72",
"assets/assets/images/events_head.JPG": "f372266310ab9cc48d2dbbc634845f95",
"assets/assets/images/headmentor.JPG": "3998bd8e9bdf373a7c3d0fb17ed05385",
"assets/assets/images/hr_head.JPG": "1cdc6d4b3c6185b8d626e182dd3630f5",
"assets/assets/images/outreach_head.JPG": "b61bf566ca21e7dac80c8d6a39683e85",
"assets/assets/images/publicity_head.JPG": "75d8f1bbc2523550c0cf10086868da11",
"assets/assets/images/secretary.JPG": "ebaf31323c457c0145c7eb7e606a2595",
"assets/assets/images/qr.png": "803bc69a7fdd9bed0ca2fdce538c8b40",
"assets/assets/images/gallery/1.jpeg": "471fc6917318b662666bcc8e48fd154a",
"assets/assets/images/gallery/2.jpeg": "5745ee94fbe5ad598d7e2edb93c494eb",
"assets/assets/images/gallery/3.jpeg": "7ee9881677d3dabd5f2d8afcfcb303c0",
"assets/assets/images/gallery/4.jpeg": "6dee9cd4e4f7100a00167968cd097bdb",
"assets/assets/images/gallery/5.jpeg": "85498661409eb3432604dc33a05a26ae",
"assets/assets/images/gallery/6.jpeg": "d97130736e30d74166a73ee7c34b2cf1",
"assets/assets/images/gallery/7.jpeg": "210624fc28d1467df59fe8c358371add",
"assets/assets/images/gallery/8.jpeg": "1eda10caf0ec3d27004d32b4a3fa90bb",
"assets/assets/images/gallery/9.jpeg": "04fdfc7c5e237547bbc1d7d74eeadd5b",
"assets/assets/images/gallery/10.jpeg": "388d2c1df387cc40ef2f563c99a46db5",
"assets/assets/images/gallery/11.jpeg": "10fb7870fe67601813db098aab3c3aa8",
"assets/assets/images/gallery/12.jpeg": "5829db5145dd05bd0f5003ad717342e6",
"assets/assets/images/gallery/13.jpeg": "511cd532aa357fff7f52954f6508542e",
"assets/assets/images/gallery/14.jpeg": "a3db0a64d0d4d69a9df30662919a199d",
"assets/assets/images/gallery/15.jpeg": "c19b35ce89a688b3ce2228137b924b6b",
"assets/assets/images/gallery/16.jpeg": "603607243b40ea372d2cceb24c9f8957",
"assets/assets/images/gallery/17.jpeg": "267a11323327fb017f62e57eea7448f4",
"assets/assets/images/gallery/18.jpeg": "0ff49f80a66f2ba60e600428876e9783",
"assets/assets/images/gallery/19.jpeg": "411051b317d28d968615e15ffcac9857",
"assets/assets/images/gallery/20.jpeg": "34ec3498a3b9aecf84a622e0322873b5",
"assets/assets/images/gallery/21.jpeg": "c376e1b02d97b3c266707387eaac0840",
"assets/assets/images/gallery/22.jpeg": "38d3aaa11f52cae5f3097172df3b0a4a",
"assets/assets/images/gallery/23.jpeg": "79fb263eeeffbff7bb81776dfe3d57b6",
"assets/assets/images/gallery/24.jpeg": "66fe232d595dd6df9495002e6a9e5cbe",
"assets/assets/images/gallery/25.jpeg": "3b36c6363f7d716a257bf7c1124488a4",
"assets/assets/images/gallery/26.jpeg": "02c0d5ec261c3cbae9d7011b7f33f88e",
"assets/assets/images/gallery/27.jpeg": "9987fdfbc82b4e2a9cb05d229c977246",
"assets/assets/images/gallery/28.jpeg": "c6817c81b4f74aa5bfa402371660230a",
"assets/assets/images/gallery/29.jpeg": "29e30c3c40d97fca1b094d60acf14a44",
"assets/assets/images/gallery/31.jpeg": "0a3ac9ee559adbc43f0d0f0b22390261",
"assets/assets/images/gallery/30.jpeg": "4dc5d431879ffe3e56d7c122cdb1bbea",
"assets/assets/images/gallery/32.jpeg": "cf0a3d5527948f171729db764b23be27",
"assets/assets/images/gallery/33.jpeg": "cfe98eeb7f261543aff6f68458e48d0f",
"assets/assets/images/gallery/34.jpeg": "171ee005b742690242b49f96466d53b1",
"assets/assets/images/gallery/35.jpeg": "559b637e6aa6fe71ee0dfa25ade7a057",
"assets/assets/images/gallery/36.jpeg": "4cef43725d9a3af5bfd3475cf2bc706c",
"assets/assets/images/gallery/37.jpeg": "7e929a9df72951e95d995440a4c93e2a",
"assets/assets/images/gallery/38.jpeg": "199805dc873640379703343863e4cb42",
"assets/assets/images/gallery/39.jpeg": "3f2f840ddb468a21d72f9ffdc004a7a0",
"assets/assets/images/gallery/40.jpeg": "e2cbf7b912faa8d4c5b03ebb30f97c19",
"assets/assets/images/gallery/41.jpeg": "f46f3b7f37535d840c478d8c4fee51d1",
"assets/assets/images/gallery/42.jpeg": "cbc735d61f97c60a676d538129f26345",
"assets/assets/images/gallery/43.jpeg": "d5a334a7f7a4529acdebe406ba713e15",
"assets/assets/images/gallery/44.jpeg": "204e3a6ac4636ae7079f2526a3b46ae1",
"assets/assets/images/gallery/46.jpeg": "2127f64e1917858bb8502a1116eaf715",
"assets/assets/images/gallery/47.jpeg": "5781daec324b40057b04bee196fae18d",
"assets/assets/images/gallery/48.jpeg": "40a7ad4f73a12cacd5112b53e2dcc6f7",
"assets/assets/images/gallery/49.jpeg": "8a6428e06a2a76ae59c395a7bea22813",
"assets/assets/images/gallery/50.jpeg": "eacb0b4e71341bf4a8d7e4dfc130ead2",
"assets/assets/images/gallery/45.jpeg": "11d4f80eb9d670dc47a5eb69e6b94b93",
"assets/assets/images/events/1.png": "3546bc54f020c022d0e012466a692b43",
"assets/assets/images/events/2.png": "67f2b9c2f8b48d7c3cfba8ec81179e10",
"assets/assets/images/events/3.png": "c32d50fd01530fd5807349984ca07d15",
"assets/assets/videos/logoNew.mp4": "8d814a9f7c64f17494d2bc6c6984944a",
"assets/assets/videos/showcase.mp4": "f2309dae0a3e1e48b339b8236b8e171d",
"assets/assets/fonts/Biryani-SemiBold.ttf": "ac266aa76a0a86d25e7e233942b76481",
"assets/assets/fonts/Fascinate-Regular.ttf": "618b096a0dc09f62319ff3eb70ed0c61",
"assets/assets/icons/logo.jpg": "999dcedaaf5d2c90b8215e3033a8df43",
"assets/fonts/MaterialIcons-Regular.otf": "79527fdfe300be25a4cd7225bddc0f78",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "98f4199c5b7f1fdcfb3e2145b346e99b",
"assets/AssetManifest.bin": "3e69aeafb2a0d9ebecedff4e0277f1dc",
"assets/AssetManifest.bin.json": "6a4773891eea541c3aabec5daf9d7a12",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "bfa23b27627bb35e6477e9ee3e48438c",
"favicon.png": "eec01411d759f5c110ca1cfcb68d1160",
"icons/Icon-192.png": "7fe64d7a470e47a3d6213c287a454bc7",
"icons/Icon-512.png": "bec2e8a78f4365bcba226e939231d1a5",
"icons/Icon-maskable-192.png": "7fe64d7a470e47a3d6213c287a454bc7",
"icons/Icon-maskable-512.png": "bec2e8a78f4365bcba226e939231d1a5",
"manifest.json": "45bfe9462d7b5ce42dc923ec26c10a47",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "199a64e64994785758e3305d6e209437",
".git/refs/remotes/origin/master": "199a64e64994785758e3305d6e209437",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/91/566fa39ff4a502703318658e58eb205894655a": "3c9aa15ba6d480435478e72786482f33",
".git/objects/81/2e355a2c426a2d899cc74fed97b3ca406b3c0b": "026e5f8763bc9470ddd4f94f97aa7f5c",
".git/objects/81/6a8a3e8b04a2f7bb95e9a344d5ce93aa809ccb": "e5b8c606b5275fc848a2a9a237bc0e43",
".git/objects/09/d6015a7d5eda7392d60bb0e8435bf0542a7f13": "a0e6741a07845d922a605914fac29d29",
".git/objects/09/ddf38bc084ac5ff2de0da3e36d835af92e5921": "74775cd70861ff9939865bec522df94b",
".git/objects/bf/76203ec65d347b1bf7a1317d98e33b3cd2d221": "60bcd84bac7fa5c1c0fcbb29db841145",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "8dc17a1a39be3d8b49f69908fc6040b7",
".git/objects/3a/75e3278353be5fa706f605ecd5f5b57d305981": "168f8573de050c81b1b44a1a57ee7ffd",
".git/objects/db/a58d00e7b541c9eedd99ebb2901f5245c2d45e": "008bb6451543539f89542625bb0da556",
".git/objects/da/092a79a90b6b9534c62c4af18280dbe5b22529": "51dd71b80543f14273a0ea99162603ef",
".git/objects/50/a5320955a6f5d30eb6ce357790f8209dc3091a": "58162c603d5347a2db380ef7dbd3b660",
".git/objects/ad/c304123c1e8e1aa4d6b1afcbf35afffbbd50a3": "2d673f20306eefbe69eb89f09088c3fa",
".git/objects/2d/d792102566cf2fbbdcc3593cef13eea829c08e": "46d3b9b74b8c8f723a7ed1c4fc5a50fc",
".git/objects/93/e59b00cdb03005753c101a0dbd740bca512b94": "580adae40cf89802ae991517fb139713",
".git/objects/93/eefd75b342b81ef6d30c3cb3e777e00d060ce2": "a5fc557b4f9157b436e8d96766d7f424",
".git/objects/93/de0f5769e214d8015044e16fe2cd88fba81813": "e72ef0f7eca8bafbe2f279a129f73223",
".git/objects/39/0448b324cec7a3fad97245b33c8b5e38de2a5c": "da6cd5a806dd921bb451a2d9f8a10f1a",
".git/objects/d0/1abb3ca8a81ff1522bbe90a73d90a1866f5437": "30c3ff72c300a100aa92ce8c609d6db6",
".git/objects/d0/5c0b14d42cc4451c4e5bb74e07587019eb201e": "66e31a9e128b33b5672e8918b0e69444",
".git/objects/45/38ac6cd485410f9dfbdb1cf3e5d143e4fb4ff3": "66eb1dec4289e0819b7be91efed2f4d5",
".git/objects/fc/3fe3fdf2f483b212398fca73726ef48039ac18": "9170213b9b122714d79186fc4976d19e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "6a1f87ff883c041ec2478b3fcae78a62",
".git/objects/9d/4b9d7d1e45f98fe22da4392bdb4b75de38efe8": "9769d23142b427639c13862685ebb36f",
".git/objects/6e/3db2b27d8562a328af56d7606ccbd6c5e39c5f": "d38f7b230b7033d16c90af3aaa5141f7",
".git/objects/17/808d5f3fc9a63dbc7d4d61f3a0e9bf9144a86a": "ec19190c54bcf8108d563e37608f09b5",
".git/objects/c8/b865c0254fe120ea672853ef10ec828f202988": "21d0e347092a6bc7f3f9594e2b046e9b",
".git/objects/51/cea651f048627b1c4da62cd487225a1dc07427": "5a17134a7a8a1520b43d14cbcfe8cbca",
".git/objects/4c/e1c52507d4bfe4c35516a2ecb9cf4df08cce87": "81c996c63f49a51a70ae1e19ea12747e",
".git/objects/4c/aad09619a5d4a7dabf87ab44d47e9ead105169": "d89660f74528ea96493f74b8a88c120f",
".git/objects/8c/3c5241ae593b2f1f6e59b63d15d6bb25b7359c": "5789e4390944cef8d694eef3b952ab9f",
".git/objects/8c/27a491f36def588236a8fe2cd8c6cfda6725bf": "47ea8496d38854e3bfa64f892e727cc1",
".git/objects/8c/7fbade3505c99dd3e073c7e765a04e73a6d1b2": "5acd675279a35b7a3527a1ebd4d303f9",
".git/objects/ea/17234e4287fc0f669b4e66d293a04cdee037a5": "530bc8f0a2a8eed794c17816d1f13f05",
".git/objects/e2/6b759783dce54ab2b1dcef3210744956646840": "8ff27c0c734b7378e25aeb09a6507f69",
".git/objects/f6/2e48d4fe27e39755351477d1b156a321a700c4": "126d8f13e15820db2420daa5e9360407",
".git/objects/77/625b5da39435acbe04b660213e859b93a9e007": "2848461ef368582a201606e8af12402b",
".git/objects/c9/1079e1a13731f52357e6590cc9501f7a98748f": "743f0067c71df44af74ba06fba33dedd",
".git/objects/8f/8c2b560eb478f57718be3802f5fb4afa79a3d7": "07492352e195953aee8045128bee07e6",
".git/objects/8f/94a8682578f367e2202b6d63d33e6a8548a253": "eb8c91d86992ef7e4040875af751fffd",
".git/objects/8f/be925c991cac7e5f6020b9687f07c81f418ab1": "a910f0bc83ea705690f4e63482cae79d",
".git/objects/b2/0563e7ad70f086647686caa4c9faba8df110be": "df825c8264640255936a2806b47e1d2c",
".git/objects/ab/dafa5059d64467f8b7cc7a1049e24127c7c060": "a20cea699047ab1327a68cefde59806b",
".git/objects/df/915ec75202fbb285a5daf728a005a145b96493": "1b5423a97b2746a6914f6709c5dcbb8b",
".git/objects/c7/541eb0ce40d1d984c970e7fda66757ae6f9130": "aeb8b90a2bd7fb25941d0faa476ccc66",
".git/objects/22/4c34ec6fe15b5505444c55709c273a23d00580": "4539388a71f21698087050554457072c",
".git/objects/5e/b671be39388c61983d242f31b0ff96fc3867c2": "8e00c3f1db1bead42b36574b21fb61b6",
".git/objects/26/9c626c55540e34bc3ff6aac50b2999e4daefe2": "e5c0a3ba8143e317a18d86fbd93591fc",
".git/objects/e1/fa1dcc19a25712dc788379366034ea07e2e337": "04325be9c2868d0d43140ce60c7d27ea",
".git/objects/e1/9baa2b6f86d058e808d426dba2b409a5d8349f": "6ff8b17232a113725e80e929ba41333d",
".git/objects/37/725a152a8e7d7823d5c556209d064a3e463179": "f73d21c50ebce2abf1e3686b4e139fd1",
".git/objects/96/0f1ab9d5f2329de427442c579dfeb540c26c1b": "c50e0c6a943728b94beafb81b8d9016c",
".git/objects/e6/0e80f0fcc7c2c8400b54e60522d7af49bc2a30": "8ede8507a876154dc93c53ffabfc4cde",
".git/objects/ac/547a10c0fadbe38d40988d00801926b5b83abb": "6092a5940033e7d10f595850e26af717",
".git/objects/ac/a60cc16772bbdcc940712db7514b1fbf6f6be4": "c1aa6738cea22f74d2a71070c57b9c92",
".git/objects/82/1e27132b48f53039bb820833d325dc42249ffb": "e312b80a7bcedf8a8edc142d5d745ba6",
".git/objects/d8/99ada4aec6e1fe3dd3e3df0a9e14250edccf6d": "85811e11c6c1eaa03caf92b06ed2197c",
".git/objects/d8/4f29dc4602a9a546d18f70d9e20a0f5da5a407": "c8ed7becd4b219333cabffe740cc51c2",
".git/objects/1d/25576cccf6833900af64204f848647c7ec5659": "07797de0987c8733ada4680c41eeb907",
".git/objects/5a/46b3183f8901cab6da40c04a09ee8bb84c8572": "90cf535b8d22b7bf2bc2ac35aa5a7ed6",
".git/objects/d9/2b99f34bda393302e94804c2dc6b5514423236": "73e040e80a78de6a215c4b25a5fa5b3b",
".git/objects/7a/9eb677318c70a25463d869670eec66776b933a": "db357065b9b83797c4f9f506c063469a",
".git/objects/bb/2a2518274e4746e558819b0b8dd901dd645ae1": "dcc186c5a6eccdceb2c922840d9094d0",
".git/objects/f8/3841da60768707b9998fd811cb6f375d1c9422": "81251f995db56f054a60c448c83c8c4d",
".git/objects/e0/abf2c231d9f383be1bf1dffda7954acf6dd9d6": "6ae729dbe433d4148477c30617855f42",
".git/objects/1e/8cad7b7e31811c0753cc2e5743e4970e551e89": "05018ea67f0d1d84da95eea6b6ed22c2",
".git/objects/eb/237e09d06ba1f7028f37bd201050e5d6c489bb": "897a3de363b515544ca2d3ac16ddebdf",
".git/objects/7e/951b736d785a0b76913149a193d545dcfb7e5a": "aa216ed7b8d2f608df1225e93c35995b",
".git/objects/e7/57eedc98817d22f752b7ff0e8c11d61ce12b7d": "5b77dc6ba39996e5546debb0b5e31c2b",
".git/objects/72/b880c5cda6b7a8ccbc6ffcb8036ab678f687a3": "379f747a27b39f76329342ecdf73997a",
".git/objects/f1/615ccfa467f9197882631ed61d00a37c25d4dc": "d7c5a55603ca2f10fa6069da1c7c46ac",
".git/objects/fd/be2992d3560d1a82ea1c4fa754e930c5c0bd2d": "e133e12861df4fafc17a14384f4eb061",
".git/objects/2c/fa4ac1a9a91065366c08ea548f698bb073988d": "6d78168226cc67ff12410d69bef6de8a",
".git/objects/e3/3cadf84d97fbc921fbf692db83c3b0096a727a": "7428d1d8173366e7bd11a21795924fae",
".git/objects/3e/71c18a1e62a332bedc445f36a29648bc33c3de": "2d2d2168cf73b8a3b070929635f33abb",
".git/objects/9c/3a91dd654aabaeff90146f5473db93b8cdbd42": "2c6b13b85e569355768ec6c05d15da60",
".git/objects/a1/b5c4f475026a070a39484cae9d0122363ef018": "1cdb125b7544bdcb109704173b06ae98",
".git/objects/6c/c0c51d2fc0fb903f6e3af54e06ec1741b6ee9e": "cada7bd36338b4af268ac121bcd7dfb6",
".git/objects/a5/91aa79611a4f02a16ed4e7fa620d6f947d8a46": "88a7d39c3e6ca8263bb580d4bb2c1597",
".git/objects/de/400c5ede6b2332b86ea3725f3c0c23dc2ba48b": "ffebdbe26e9e2a4196c4df117e451e7d",
".git/objects/69/88ac67e5208b983e95eab7af91aec24554e2d0": "617a835a7a074c64174eeb86fe3172e0",
".git/objects/6d/dd01f579d0fb7e156cd2d29fd698066fdffb41": "f4a81d8f860254062a312dda6a1dfafa",
".git/objects/00/e169e8318edf6eae011d548ce0380bc41ad485": "e441156a128dfe8de81b6c28c3e41a11",
".git/objects/00/60add1ed95a05376906d454f182393d163d37c": "e37f74ad14b518650011322c02b12106",
".git/objects/e9/5f4ce73cb6b16e10af45244a2fef21bef932a4": "0b390c3a0e6d084970d84c2a4cda9db7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9e0a7dce91540443aeee8c8cd1dcd7df",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "31299a304c14aab94382bc5c25340899",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "2fb7c69169b24c3f5eecfe793e6dca2d",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "e8de149a87cdbffa6fe2e2cdd36fdf68",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "07e81c3cddd0d7ab9ecbc1e383a2ae98",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "7f1ceb3657f86b0eff46fd5e62771f5e",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "aa248fbf7bb1d394559bfcb1162b8075",
".git/objects/b9/a2fc86d76c44689ea706b0c2588f3ff61eeb4c": "c168ae02be81f89d5c74f838ac29d5ee",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "923fef021501d9a9e19d67300a51b36d",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "e62ccebd270b4fd776004bbe4d5d8eea",
".git/objects/21/f7bcb924e3a3c0a6b44136a76f6b7091a0a03f": "bcd3d68c4e1a1812734ef63828b02fa2",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "206dcac9a8a50fd5a0b614c1afdb7b98",
".git/objects/bd/d72959808459545136ccbc554942bff3a22640": "3cccd851cc65c4cd981ce0fb845ad143",
".git/objects/bd/79432e98ffbc8c3f55de989de1e1752e78720f": "661003cb901c2c18697528cfa2517993",
".git/objects/04/a128b65618f939fc6dfdee53f7c92e4a01fad6": "ddb2a9f289835990ddde5c829c61fe91",
".git/objects/30/416aec255e106c23a06c4c724f05afbf17966e": "f9d5e26c1cd2aacd3c4ad98cb7fc983c",
".git/objects/42/c93c457cdd103a03d6dbe9e125431edf904dae": "6dbcbf411329aeaeee7e4eb59c4bce21",
".git/objects/28/bc52983b44113952175215f3c0092ecc7ae866": "00e3a67b86e15c3fb4c7d8654de66ee3",
".git/objects/be/906aaba8c4d4bdb96fd43ffd64dcf95dd921e0": "a97938cb2ac8ec66844af14d1ad8d575",
".git/objects/95/2a6281baab393daa2cea2c88ac770b9763c1a0": "8fa9549d6bd84368e6f5ad8279852767",
".git/objects/fb/0f1c4d9a2c30b65078489b3ca412f38ad1127f": "e7a6208853c5d5bd1a116be03771f644",
".git/objects/11/5c3d23b4d7e7c020fc216c1a87caee1bd20d97": "e4dc0b2f81a9094660149ddae4d28741",
".git/objects/b8/c68a3d05e8bcec70eb899933b137f101597621": "beb971898e65da9c10d947002f90d72a",
".git/objects/1c/3a1b23ca1832f47ef73d6ae798ce4472e6d024": "f6bbb739ccb8b6c73aaafe714ed6ded0",
".git/objects/b3/15b0300d47429099eccfc1c54e4996356b4ce4": "bf2cc8a1542a4851f5264986db5d837f",
".git/objects/3f/4ab6c8bc3ecf32215f750ebab01d8cba371fff": "2b93fa0b7dd034b6aaf0daf76a2e1d8e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/4a/bd89429b7e4ae5e067201348ea0d2633e17549": "a887a080396460e69e32b765999548ee",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "66253b19cd251a8eb6ccfe6c17acc72e",
".git/objects/c2/be02a0540de5010036c7ee84b44c69c9a7592b": "6ec50145f54b84518da20c357b82760e",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/index": "253fb266d9d00420c5a1ce6e4dedd3df",
".git/COMMIT_EDITMSG": "e1b3b06fbbb62cc309ebbf4ef148def7",
".git/logs/HEAD": "fae6863f73ade8c5a051f5c71717f4f5",
".git/logs/refs/heads/master": "fae6863f73ade8c5a051f5c71717f4f5",
".git/logs/refs/remotes/origin/master": "88c151131ad97157e28f4159d22982eb",
".git/config": "7f4bd9d67ae30b18d57b03763ede4f87"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
