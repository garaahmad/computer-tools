const components = [
  {
    name: "المعالج (CPU)",
    image: "https://imgs.search.brave.com/VdUIBrSuy4PPvhbWPvTmialWOy7R0lrP_Xj6Q31GwuM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzU5Lzgx/LzM2MF9GXzEwOTU5/ODE0MV9oaEhScml5/YU8yaklEVVBidHRF/Mzg1enlFWlVzckhi/UC5qcGc",
    materials: { سيليكون: 70, نحاس: 15, ذهب: 3, أخرى: 12 },
    usage: ["مقبس المعالج", "نظام التبريد", "وحدات المعالجة"],
    specs: { السرعة: "3.8GHz", الاستهلاك: "65W", النواة: "6 أنوية" },
  },
  {
    name: "اللوحة الأم",
    image: "https://imgs.search.brave.com/KZClBiZLlxf1tyi0E9XVmOp517p3KHEc_Cb28nsPGLo/rs:fit:500:0:0:0/g:ce/aHR0cDovL2Jsb2cu/bG9naWNhbGluY3Jl/bWVudHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAy/L0Jpb3N0YXItQjQ1/ME1IQy1tb3RoZXJi/b2FyZC5qcGc",
    materials: { فايبرجلاس: 55, نحاس: 25, ذهب: 2, أخرى: 18 },
    usage: ["التوصيلات الداخلية", "منافذ التوسعة", "التيار الكهربائي"],
    specs: { المقبس: "LGA 1200", "منافذ USB": "8", الشكل: "ATX" },
  },
  {
    name: "كرت الشاشة (GPU)",
    image: "https://imgs.search.brave.com/TV0RbZliBcAb-Hs7t347kTfnVbT79NeB5GSD4BuhI5k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzU1LzU0LzA1/LzM2MF9GXzU1NTU0/MDUxOF8yUkgzY1p0/b3lxcjhXMnM3bmNh/N05ra0JsY2ZDNkZO/cy5qcGc",
    materials: { سيليكون: 60, نحاس: 20, ذهب: 5, أخرى: 15 },
    usage: ["معالجة الرسوميات", "منفذ PCIe", "الواقع الافتراضي"],
    specs: { VRAM: "8GB", الناقل: "PCIe 4.0", التوصيل: "HDMI 2.1" },
  },
  {
    name: "الذاكرة العشوائية (RAM)",
    image: "https://imgs.search.brave.com/sINRwJk47X7WRTSAxQLPtj_TS9V0YDN2ljaCWWLzyjg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzAyLzc4LzM0/LzM2MF9GXzEwMjc4/MzQwNF9DYUFVMmxy/OHhFTjVDTUoxcEVv/SXJxQzllU2E3aHNV/ai5qcGc",
    materials: { سيليكون: 50, نحاس: 30, ذهب: 3, أخرى: 17 },
    usage: ["التخزين المؤقت", "فتحات DIMM", "تحسين الأداء"],
    specs: { السعة: "16GB", التردد: "3200MHz", التأخير: "CL16" },
  },
  {
    name: "القرص الصلب (HDD)",
    image: "https://imgs.search.brave.com/W91vAvuSLYEYsnEgcuNkNwggoG-SFbmHQLDiET42tPo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2pa/TVJrdFVRc1B4Y3hM/VXM1Q2NUMkwtODQw/LTgwLmpwZw",
    materials: { ألمنيوم: 60, نحاس: 20, مغناطيس: 15, أخرى: 5 },
    usage: ["التخزين الدائم", "منفذ SATA", "النسخ الاحتياطي"],
    specs: { السعة: "2TB", السرعة: "7200 RPM", الواجهة: "SATA III" },
  },
  {
    name: "مزود الطاقة (PSU)",
    image: "https://imgs.search.brave.com/msRewEPUqNp2GGEKzwgPOhHtnkIPBgdoyYeDv4e9Pqo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQ29y/c2Fpci1DWC1TZXJp/ZXMtNzUwLVctQVRY/LUNvbXB1dGVyLVBv/d2VyLVN1cHBseV81/N2JhNDViNS03OGI4/LTQzZjUtYjBlMy00/YjFlZjUyZWZhZjIu/MDMzODI0YjFhMTU4/ZTZkZDU1M2Y4YmUy/OGQ4ZTUxYmYuanBl/Zz9vZG5IZWlnaHQ9/NTgwJm9kbldpZHRo/PTU4MCZvZG5CZz1G/RkZGRkY",
    materials: { نحاس: 45, حديد: 30, بلاستيك: 20, أخرى: 5 },
    usage: ["إمداد الطاقة", "التحكم في الجهد", "الحماية من التيار"],
    specs: { الاستطاعة: "650W", الكفاءة: "80+ Gold", المنافذ: "6" },
  },
  {
    name: "المشتت الحراري",
    image: "https://imgs.search.brave.com/XvlT5mjFpErrty8gRGtqRjgxHzpYzqWHe5o5FRI-654/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pcXJv/cnd4aGxrcHJsaTVx/LmxkeWNkbi5jb20v/Y2xvdWQvbHBCcGtL/bm5sb1NScGlqaXJv/bGtpby83ODNBMzkz/Ny5qcGc",
    materials: { ألمنيوم: 70, نحاس: 25, أخرى: 5 },
    usage: ["تبريد المعالج", "إدارة الحرارة", "منع السخونة الزائدة"],
    specs: { الأبعاد: "120x120mm", الوزن: "450g", المراوح: "2" },
  },
  {
    name: "كرت الصوت",
    image: "https://imgs.search.brave.com/vtpwCekPBScrffIeVcHGqOdj9eKPCYx486r8qSxQPXs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlmZXdpcmUuY29t/L3RobWIvUEhoa2NP/dXBQVkRTNkJqTjl4/T2NuT2o0QVY4PS8x/NTAweDAvZmlsdGVy/czpub191cHNjYWxl/KCk6bWF4X2J5dGVz/KDE1MDAwMCk6c3Ry/aXBfaWNjKCkvY3Jl/YXRpdmUtc291bmQt/Ymxhc3Rlci16LXNi/eC1wY2llLWdhbWlu/Zy1zb3VuZC1jYXJk/LTVhZWI2YjkyMWY0/ZTEzMDAzN2U5ODgz/Yi5wbmc",
    materials: { سيليكون: 50, نحاس: 30, ذهب: 5, أخرى: 15 },
    usage: ["منافذ PCIe", "معالجة الصوت", "الإخراج الصوتي"],
    specs: { القنوات: "7.1", الدقة: "192kHz", التأخير: "2ms" },
  },
  {
    name: "شريحة البيوس",
    image: "https://imgs.search.brave.com/o6N1bCXlklr4xk1N_dNVx5blzUEsyzh9S-Lq6VoKKB4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5oc3dzdGF0aWMu/Y29tL2V5SmlkV05y/WlhRaU9pSmpiMjUw/Wlc1MExtaHpkM04w/WVhScFl5NWpiMjBp/TENKclpYa2lPaUpu/YVdaY0wySnBiM010/WTJocGNDNXFjR2Np/TENKbFpHbDBjeUk2/ZXlKeVpYTnBlbVVp/T25zaWQybGtkR2dp/T2pneU9IMTlmUT09.jpeg",
    materials: { سيليكون: 80, نحاس: 15, أخرى: 5 },
    usage: ["تهيئة النظام", "إعدادات الأجهزة", "التشغيل الأولي"],
    specs: { السعة: "128MB", الواجهة: "SPI", الفولتية: "3.3V" },
  },
  {
    name: "منافذ SATA",
    image: "https://imgs.search.brave.com/DmJwNfUMccTOCFm9Zi-8Hnu9JwdaH7eW8GynXiJ9dRM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZGlmZmVuLmNv/bS91cGxvYWR6L2Mv/YzYvU0FUQS5qcGc",
    materials: { نحاس: 60, بلاستيك: 35, أخرى: 5 },
    usage: ["توصيل التخزين", "نقل البيانات", "النسخ الاحتياطي"],
    specs: { السرعة: "6Gb/s", الطول: "1m", الفولتية: "5V" },
  },
  {
    name: "منفذ USB-C",
    image: "https://imgs.search.brave.com/qcu9yFBO5Wf0f866EQNxlBRHaZm0iD3nhGY-lZH4rf0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY29udGVudHN0/YWNrLmlvL3YzL2Fz/c2V0cy9ibHRiNjU0/ZDFiOTZhNzJkZGM0/L2JsdDMzODM4MGE0/M2M4Yjg2MWQvNjZl/Y2MyZDhmZjgyYmQz/ZTc2MmQxYWY2L1NQ/Qy1CbG9nLUhvdy10/by1BZGQtVVNCLVR5/cGUtQy10by1Nb3Ro/ZXJib2FyZC0yLmpw/Zw",
    materials: { نحاس: 60, بلاستيك: 35, ذهب: 3, أخرى: 2 },
    usage: ["نقل البيانات", "الشحن السريع", "الإخراج المرئي"],
    specs: { السرعة: "40Gbps", القوة: "100W", الإصدار: "3.2 Gen 2x2" },
  },
  {
    name: "متحكم الإضاءة (RGB Controller)",
    image: "https://imgs.search.brave.com/hxazPldfeN9Vc4-z-y0PROfEIlGMH5mktRxk1PPqUnM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL3Byb2R1Y3Rp/bWFnZS9uYjMwMC8x/MS0xMzktMTU5LVYw/MS5qcGc",
    materials: { سيليكون: 40, نحاس: 25, بلاستيك: 30, أخرى: 5 },
    usage: ["إدارة الإضاءة", "المزامنة مع المكونات", "التخصيص البصري"],
    specs: { القنوات: "6", البروتوكول: "ARGB", البرمجيات: "iCUE" },
  },
  {
    name: "شريحة TPM",
    image: "https://imgs.search.brave.com/FU2ulYVG3s-ivyWz8M0C6uh1KJVvEDRMA8UOy8clbOo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF0SEl0enlSOUwu/anBn",
    materials: { سيليكون: 85, نحاس: 10, أخرى: 5 },
    usage: ["التشفير", "حماية البيانات", "المصادقة الآمنة"],
    specs: { الإصدار: "2.0", الخوارزمية: "SHA-256", السعة: "2048-bit" },
  },
  {
    name: "مازربورد الخادم (Server Board)",
    image: "https://imgs.search.brave.com/I_sOv3-Fuc5RFEunKU8XPBbGQXNMwofxkG-9Zhp-6VY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9raW1v/c3RvcmUubmV0L2Nk/bi9zaG9wL2ZpbGVz/L21zaS1iNDUwbS1w/cm8tdmRoLW1heC1t/b3RoZXJib2FyZC1h/bTQta2ltby1zdG9y/ZS0xLmpwZz92PTE3/MTUwMzM0MDYmd2lk/dGg9MTAwMA",
    materials: { فايبرجلاس: 60, نحاس: 25, ذهب: 5, أخرى: 10 },
    usage: ["مراكز البيانات", "المعالجة المكثفة", "التخزين الشبكي"],
    specs: { المقابس: "Dual LGA 4189", الذاكرة: "2TB", منافذ: "8 PCIe 4.0" },
  },
  {
    name: "وحدة تبريد سائل (AIO)",
    image: "https://imgs.search.brave.com/CAIXRCnLg6UF29SghDL15TXgzyPEANXjdNIJ6ifXOcQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjExcXpEQVo4Nkwu/anBn",
    materials: { نحاس: 40, ألمنيوم: 30, بلاستيك: 25, أخرى: 5 },
    usage: ["تبريد المعالج", "إدارة الحرارة", "تقليل الضوضاء"],
    specs: { السعة: "240mm", المراوح: "2", التدفق: "80CFM" },
  },
  {
    name: "متحكم الشاشة (Display Controller)",
    image: "https://imgs.search.brave.com/Vs_IAqiHwRndee6bCMjdF4Bl6gwK9bwONxhOujYvvTI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/b21wdXRlci1zY3Jl/ZW5fMTIzMi01NDEu/anBnP3NlbXQ9YWlz/X2h5YnJpZA",
    materials: { سيليكون: 70, نحاس: 20, ذهب: 5, أخرى: 5 },
    usage: ["إدارة الدقة", "تحديث معدل الصورة", "معالجة الألوان"],
    specs: { الدقة: "8K", التردد: "144Hz", الألوان: "10-bit" },
  },
  {
    name: "بطاقة التخزين المؤقت (Cache Card)",
    image: "http://imgs.search.brave.com/YtZJmfj6O2QmaoApDwiLr_t6_g9dxh1jTuudSS7yRM0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1t/ZW1vcnktY2hpcHNf/Njk1OTMtNDQ5OS5q/cGc_c2VtdD1haXNf/aHlicmlk",
    materials: { سيليكون: 60, نحاس: 25, ذهب: 5, أخرى: 10 },
    usage: ["تسريع القرص الصلب", "الذاكرة المؤقتة", "تحسين الأداء"],
    specs: { السعة: "128GB", السرعة: "3000MB/s", الواجهة: "PCIe 3.0" },
  },
  {
    name: "متحكم الإشارات الرقمية (DSP)",
    image: "https://imgs.search.brave.com/G7VLBEuyTknAglAVDPpz36Q9C2ZCx1kH7bF6azYnNag/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E5L0RzcF9jaGlw/LmpwZw",
    materials: { سيليكون: 80, نحاس: 15, ذهب: 3, أخرى: 2 },
    usage: ["معالجة الصوت", "التصفية الرقمية", "التحكم بالمرشحات"],
    specs: { القنوات: "16", الدقة: "32-bit", التردد: "192kHz" },
  },
  {
    name: "شريحة البلوتوث",
    image: "https://imgs.search.brave.com/N7Rauvptp5bX1pMr8ipagH9Mkvp1AdDYgW_HMWE_MTk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vaVdv/cmxkLUJsdWV0b290/aC1BdWRpby1DYXIt/S2l0LVN0cmVhbS1N/dXNpYy1hbmQtQ2Fs/bHMtSGFuZHMtRnJl/ZV85NzZkNzM3ZC0y/MTExLTQ3MjItOGE3/NC1iNDNhZmEzZWU3/NWQuNmIzZGFjMmE3/YzA5OTgwYmIxM2Qy/ZTE4NjQ0NmU1NDgu/anBlZz9vZG5IZWln/aHQ9NTgwJm9kbldp/ZHRoPTU4MCZvZG5C/Zz1GRkZGRkY",
    materials: { سيليكون: 70, نحاس: 20, ذهب: 5, أخرى: 5 },
    usage: ["الاتصال اللاسلكي", "المزامنة مع الأجهزة", "نقل البيانات"],
    specs: { الإصدار: "5.2", المدى: "100m", الاستهلاك: "10mW" },
  },
  {
    name: "وحدة معالجة الشبكة (NPU)",
    image: "https://imgs.search.brave.com/S_rpwS5D7qms51tXcK9VzSDSYEV2L3Sn5gY1IEjUpbw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV4/dHJlbWV0ZWNoLmNv/bS9pbWFnZXJ5L2Nv/bnRlbnQtdHlwZXMv/MDZXdTcyOVJoaTZE/bkdwcktDQTZGWXYv/aGVyby1pbWFnZS5m/aXRfbGltLnYxNzM3/MTM3NDM0LmpwZw",
    materials: { سيليكون: 75, نحاس: 15, ذهب: 5, أخرى: 5 },
    usage: ["تسريع الشبكات", "معالجة الحزم", "تحسين الأمان"],
    specs: {
      السرعة: "100Gbps",
      الإطارات: "10Mpps",
      البروتوكولات: "TCP/IP, VLAN",
    },
  },
  {
    name: "متحكم الفلاش (Flash Controller)",
    image: "https://imgs.search.brave.com/eWy0Ulcx7nTb0dwH5SIT38Jq-HoYar48gr_DTGYFurE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY3/NzE1MzI3L3Bob3Rv/L2ZsYXNoLW1lbW9y/eS1kaXNrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1lemJu/UnEzR2NCMW5iSS04/X0lJSHFFbVJfa1hj/NlByTVByaGdiOVNX/UGJnPQ",
    materials: { سيليكون: 65, نحاس: 20, ذهب: 5, أخرى: 10 },
    usage: ["إدارة ذاكرة الفلاش", "تحسين الأداء", "زيادة العمر الافتراضي"],
    specs: { القنوات: "8", التشفير: "AES-256", الواجهة: "ONFI 4.0" },
  },
  {
    name: "شريحة GPS",
    image: "https://imgs.search.brave.com/KzzcLAAIKEFL8Sn-C4JlvfMgAofuAPbpDNOBwDWBS_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vMlgt/TWluaS1HUFMtVHJh/Y2tlci1TT1MtUmVh/bC1UaW1lLUNhbGwt/Vm9pY2UtVHJhY2tp/bmctTG9jYXRvci1m/b3ItTGFwdG9wLUVs/ZGVybHktUGVvcGxl/LVJlYWwtVGltZS1U/cmFja2luZy1EZXZp/Y2VfOGQ0ZmIxOTUt/MWY5MS00ZTk1LWFh/MzMtNzdkZTBkZmJl/MmEwLjBjMTVjZjFm/Yjg3YzY4MDIwNGE2/NWNiZmFjNzVjZmQy/LmpwZWc_b2RuSGVp/Z2h0PTU4MCZvZG5X/aWR0aD01ODAmb2Ru/Qmc9RkZGRkZG",
    materials: { سيليكون: 70, نحاس: 20, ذهب: 5, أخرى: 5 },
    usage: ["الملاحة", "تحديد المواقع", "المزامنة الزمنية"],
    specs: { الدقة: "1.5m", الأقمار: "GPS/GLONASS", الاستهلاك: "25mW" },
  },
];

// Initialization Functions
function initComponents() {
  const grid = document.getElementById("componentsGrid");
  components.forEach((component, index) => {
    const card = document.createElement("div");
    card.className = "component-card";
    card.innerHTML = `
            <img src="${component.image}" class="component-image" alt="${component.name}">
            <h3 class="component-name">${component.name}</h3>
        `;
    card.addEventListener("click", () => openModal(component));
    grid.appendChild(card);

    setTimeout(() => {
      card.classList.add("visible");
    }, index * 100);
  });
}

// Modal Functions
function openModal(component) {
  const modal = document.getElementById("componentModal");
  modal.style.display = "block";

  document.getElementById("modalTitle").textContent = component.name;
  document.getElementById("modalImage").src = component.image;

  // Material Chart
  const ctx = document.getElementById("materialChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(component.materials),
      datasets: [
        {
          data: Object.values(component.materials),
          backgroundColor: [
            "#3498db",
            "#2ecc71",
            "#e74c3c",
            "#f1c40f",
            "#9b59b6",
          ],
        },
      ],
    },
  });
// تعديل دالة openModal لإضافة إغلاق عند النقر خارج المحتوى
function openModal(component) {
    const modal = document.getElementById('componentModal');
    modal.style.display = 'block';

    // إضافة حدث إغلاق عند النقر خارج المحتوى
    modal.onclick = function(e) {
        if (e.target === modal) closeModal();
    }

    // ... باقي الكود كما هو ...
}
  // Usage Information
  document.getElementById("usageInfo").innerHTML = `
        <h3>أماكن الاستخدام:</h3>
        <ul>${component.usage.map((item) => `<li>${item}</li>`).join("")}</ul>
    `;

  // Technical Specifications
  document.getElementById("specsInfo").innerHTML = `
        <h3>المواصفات الفنية:</h3>
        ${Object.entries(component.specs)
          .map(
            ([key, value]) => `
            <p><strong>${key}:</strong> ${value}</p>
        `
          )
          .join("")}
    `;
}

function closeModal() {
  document.getElementById("componentModal").style.display = "none";
  Chart.getChart("materialChart")?.destroy();
}

// Event Listeners
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  document.querySelectorAll(".component-card").forEach((card) => {
    const name = card
      .querySelector(".component-name")
      .textContent.toLowerCase();
    card.style.display = name.includes(searchTerm) ? "block" : "none";
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".component-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      card.classList.add("visible");
    }
  });
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("componentModal")) {
    closeModal();
  }
});

// Initialize
window.addEventListener("DOMContentLoaded", initComponents);
