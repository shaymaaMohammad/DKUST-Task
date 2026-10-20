// const productsArray = [
//   {
//     id: 1,
//     name: "AI Analytics Dashboard",
//     category: "Software",

//     description:
//       "Real-time analytics powered by machine learning. Monitor KPIs, detect anomalies, and get predictive insights from your data with an intuitive drag-and-drop interface.",

//     features: [
//       "Real-time data streaming",
//       "ML-powered predictions",
//       "Custom dashboards",
//       "API integrations",
//       "Export to CSV / PDF"
//     ],

//     price: 299,
//     rating: 4.8,
//     reviewsCount: 124,
//     badge: "Best Seller",
//     colorBg: "#1a3a6e",
//   },

//   {
//     id: 2,
//     name: "RoboArm Pro X1",
//     category: "Robotics",

//     description:
//       "Industrial-grade robotic arm with 6 degrees of freedom. Precision control with sub-millimeter accuracy, perfect for assembly lines and research labs.",

//     features: [
//       "6 degrees of freedom",
//       "Sub-millimeter precision",
//       "Load capacity up to 10kg",
//       "ROS compatible",
//       "Safety sensors built-in"
//     ],

//     price: 4999,
//     rating: 4.6,
//     reviewsCount: 38,
//     badge: "New",
//     colorBg: "#0d3320",
//   },

//   {
//     id: 3,
//     name: "DataSync Cloud",
//     category: "Software",

//     description:
//       "Seamlessly sync and manage your data across cloud providers. Supports AWS, Azure, and GCP with end-to-end encryption and real-time conflict resolution.",

//     features: [
//       "Multi-cloud synchronization",
//       "AWS, Azure and GCP support",
//       "End-to-end encryption",
//       "Real-time conflict resolution",
//       "Centralized data management"
//     ],

//     price: 49,
//     rating: 4.5,
//     reviewsCount: 210,
//     badge: "Popular",
//     colorBg: "#3a1a6e",
//   },

//   {
//     id: 4,
//     name: "ML Training Suite",
//     category: "AI",

//     description:
//       "End-to-end machine learning pipeline tool. From data preprocessing to model deployment, everything in one unified workspace built for teams.",

//     features: [
//       "Data preprocessing tools",
//       "Model training workspace",
//       "Experiment tracking",
//       "Model deployment support",
//       "Team collaboration tools"
//     ],

//     price: 199,
//     rating: 4.7,
//     reviewsCount: 89,
//     badge: null,
//     colorBg: "#1a3a6e",
//   },

//   {
//     id: 5,
//     name: "SmartSensor Kit",
//     category: "Hardware",

//     description:
//       "IoT sensor kit with 12 sensors including temperature, humidity, pressure, and motion. Pre-configured for instant plug-and-play integration.",

//     features: [
//       "12 integrated IoT sensors",
//       "Temperature monitoring",
//       "Humidity and pressure detection",
//       "Motion sensing",
//       "Plug-and-play integration"
//     ],

//     price: 149,
//     rating: 4.3,
//     reviewsCount: 56,
//     badge: "Sale",
//     colorBg: "#3a1a0d",
//   },

//   {
//     id: 6,
//     name: "CyberShield VPN",
//     category: "Security",

//     description:
//       "Enterprise-grade VPN solution with zero-log policy. Military-grade AES-256 encryption, kill switch, and split tunneling for maximum security.",

//     features: [
//       "Zero-log privacy policy",
//       "AES-256 encryption",
//       "Automatic kill switch",
//       "Split tunneling support",
//       "Enterprise-grade security"
//     ],

//     price: 79,
//     rating: 4.9,
//     reviewsCount: 305,
//     badge: "Top Rated",
//     colorBg: "#0d1b3e",
//   },
// ];

// export default productsArray;

const productsArray = [
  {
    id: 1,
    name: {
      en: "AI Analytics Dashboard",
      ar: "لوحة تحكم التحليلات بالذكاء الاصطناعي",
    },
    category: { en: "Software", ar: "البرمجيات" },
    description: {
      en: "Real-time analytics powered by machine learning. Monitor KPIs, detect anomalies, and get predictive insights from your data with an intuitive drag-and-drop interface.",
      ar: "تحليلات فورية مدعومة بالتعلم الآلي. راقب مؤشرات الأداء الرئيسية، واكتشف العيوب، واحصل على رؤى مستقبلية من بياناتك بواجهة سحب وإفلات بديهية.",
    },
    features: {
      en: [
        "Real-time data streaming",
        "ML-powered predictions",
        "Custom dashboards",
        "API integrations",
        "Export to CSV / PDF",
      ],
      ar: [
        "تدفق البيانات في الوقت الفعلي",
        "التنبؤات المدعومة بالتعلم الآلي",
        "لوحات تحكم مخصصة",
        "تكاملات واجهة برمجة التطبيقات (API)",
        "التصدير إلى CSV / PDF",
      ],
    },
    price: 299,
    rating: 4.8,
    reviewsCount: 124,
    badge: { en: "Best Seller", ar: "الأكثر مبيعاً" },
    colorBg: "#1a3a6e",
  },
  {
    id: 2,
    name: { en: "RoboArm Pro X1", ar: "ذراع روبوت برو X1" },
    category: { en: "Robotics", ar: "الروبوتات" },
    description: {
      en: "Industrial-grade robotic arm with 6 degrees of freedom. Precision control with sub-millimeter accuracy, perfect for assembly lines and research labs.",
      ar: "ذراع روبوتية صناعية بستة درجات حرية. تحكم دقيق بدقة متناهية تحت المليمتر، مثالية لخطوط التجميع ومختبرات الأبحاث.",
    },
    features: {
      en: [
        "6 degrees of freedom",
        "Sub-millimeter precision",
        "Load capacity up to 10kg",
        "ROS compatible",
        "Safety sensors built-in",
      ],
      ar: [
        "6 درجات من الحرية",
        "دقة متناهية تحت المليمتر",
        "قدرة تحميل تصل إلى 10 كجم",
        "متوافق مع نظام تشغيل الروبوتات (ROS)",
        "حساسات أمان مدمجة",
      ],
    },
    price: 4999,
    rating: 4.6,
    reviewsCount: 38,
    badge: { en: "New", ar: "جديد" },
    colorBg: "#0d3320",
  },
  {
    id: 3,
    name: { en: "DataSync Cloud", ar: "سحابة مزامنة البيانات" },
    category: { en: "Software", ar: "البرمجيات" },
    description: {
      en: "Seamlessly sync and manage your data across cloud providers. Supports AWS, Azure, and GCP with end-to-end encryption and real-time conflict resolution.",
      ar: "قم بمزامنة بياناتك وإدارتها بسلاسة عبر مزودي الخدمات السحابية. يدعم AWS و Azure و GCP مع تشفير من طرف إلى طرف وحل التعارضات في الوقت الفعلي.",
    },
    features: {
      en: [
        "Multi-cloud synchronization",
        "AWS, Azure and GCP support",
        "End-to-end encryption",
        "Real-time conflict resolution",
        "Centralized data management",
      ],
      ar: [
        "المزامنة متعددة السحابة",
        "دعم منصات AWS و Azure و GCP",
        "تشفير من طرف إلى طرف",
        "حل التعارضات في الوقت الفعلي",
        "إدارة البيانات المركزية",
      ],
    },
    price: 49,
    rating: 4.5,
    reviewsCount: 210,
    badge: { en: "Popular", ar: "شائع" },
    colorBg: "#3a1a6e",
  },
  {
    id: 4,
    name: { en: "ML Training Suite", ar: "حزمة تدريب تعلم الآلة" },
    category: { en: "AI", ar: "الذكاء الاصطناعي" },
    description: {
      en: "End-to-end machine learning pipeline tool. From data preprocessing to model deployment, everything in one unified workspace built for teams.",
      ar: "أداة متكاملة لبناء خطوط إنتاج تعلم الآلة. من المعالجة المسبقة للبيانات إلى نشر النموذج، كل شيء في مساحة عمل واحدة موحدة مبنية للفرق.",
    },
    features: {
      en: [
        "Data preprocessing tools",
        "Model training workspace",
        "Experiment tracking",
        "Model deployment support",
        "Team collaboration tools",
      ],
      ar: [
        "أدوات المعالجة المسبقة للبيانات",
        "مساحة عمل لتدريب النماذج",
        "تتبع التجارب البرمجية",
        "دعم نشر النماذج الحوسبية",
        "أدوات التعاون الجماعي للفرق",
      ],
    },
    price: 199,
    rating: 4.7,
    reviewsCount: 89,
    badge: null,
    colorBg: "#1a3a6e",
  },
  {
    id: 5,
    name: { en: "SmartSensor Kit", ar: "حقيبة المستشعرات الذكية" },
    category: { en: "Hardware", ar: "الأجهزة والمعدات" },
    description: {
      en: "IoT sensor kit with 12 sensors including temperature, humidity, pressure, and motion. Pre-configured for instant plug-and-play integration.",
      ar: "حقيبة مستشعرات إنترنت الأشياء (IoT) تحتوي على 12 مستشعراً بما في ذلك درجة الحرارة والرطوبة والضغط والحركة. مهيأة مسبقاً للتشغيل الفوري.",
    },
    features: {
      en: [
        "12 integrated IoT sensors",
        "Temperature monitoring",
        "Humidity and pressure detection",
        "Motion sensing",
        "Plug-and-play integration",
      ],
      ar: [
        "12 مستشعراً مدمجاً لإنترنت الأشياء",
        "مراقبة درجات الحرارة",
        "كشف الرطوبة والضغط الجوي",
        "استشعار الحركة الذكي",
        "تكامل فوري مباشر عند التوصيل",
      ],
    },
    price: 149,
    rating: 4.3,
    reviewsCount: 56,
    badge: { en: "Sale", ar: "خصم" },
    colorBg: "#3a1a0d",
  },
  {
    id: 6,
    name: { en: "CyberShield VPN", ar: "شبكة سايبر شيلد الافتراضية" },
    category: { en: "Security", ar: "الحماية والأمن" },
    description: {
      en: "Enterprise-grade VPN solution with zero-log policy. Military-grade AES-256 encryption, kill switch, and split tunneling for maximum security.",
      ar: "حل شبكة افتراضية خاصة (VPN) للمؤسسات مع سياسة عدم الاحتفاظ بالسجلات. تشفير AES-256 بمواصفات عسكرية، ومفتاح إيقاف تلقائي، وتوجيه نفق مقسم لأقصى درجات الأمان.",
    },
    features: {
      en: [
        "Zero-log privacy policy",
        "AES-256 encryption",
        "Automatic kill switch",
        "Split tunneling support",
        "Enterprise-grade security",
      ],
      ar: [
        "سياسة خصوصية تضمن عدم تسجيل البيانات",
        "تشفير AES-256 القوي",
        "مفتاح إيقاف تلقائي عند انقطاع الاتصال",
        "دعم نفق الاتصال المقسم",
        "أمان متقدم بدرجة مؤسسية",
      ],
    },
    price: 79,
    rating: 4.9,
    reviewsCount: 305,
    badge: { en: "Top Rated", ar: "الأعلى تقييماً" },
    colorBg: "#0d1b3e",
  },
];

export default productsArray;
