export type Language = 'th';

export interface RoomTranslation {
    name: string;
    desc: string;
    features: string[];
    price: string;
}

export interface MonthlyRoomTranslation {
    id?: number;
    name: string;
    desc: string;
    price: string;
    deposit: string;
    availableRoomsList?: string[];
    features: string[];
}

export interface Translations {
    brand: string;
    navHome: string;
    navRooms: string;
    navFacilities: string;
    navNearby: string;
    navRules: string;
    navFaq: string;
    navReviews: string;
    welcome: string;
    subheading: string;
    selectRoomBtn: string;
    roomSectionTitle: string;
    roomSectionSubtitle: string;
    viewDetails: string;
    bookNow: string;
    pricePerNight: string;
    dailyTab: string;
    monthlyTab: string;
    depositLabel: string;
    perMonth: string;
    singleRoom: RoomTranslation;
    twinRoom: RoomTranslation;
    extraRoom: RoomTranslation;
    fanFutonRoom?: RoomTranslation;
    suiteRoom?: RoomTranslation;
    monthlyRooms: MonthlyRoomTranslation[];
    utilityTitle: string;
    electricityLabel: string;
    electricityVal: string;
    waterLabel: string;
    waterVal: string;
    maintenanceLabel: string;
    maintenanceVal: string;
    carParkingLabel: string;
    carParkingVal: string;
    motoParkingLabel: string;
    motoParkingVal: string;
    keyUnlockLabel?: string;
    keyUnlockVal?: string;
    rulesTitle: string;
    rulesList: string[];
    rulesNotice: string;
    checkInTitle: string;
    checkInSteps: string[];
    checkOutTitle: string;
    checkOutSteps: string[];
    bankAccountTitle: string;
    bankAccountVal: string;
    bankNameVal: string;
    bankAccountName: string;
    wifiTitle: string;
    wifiPass: string;
    lineModalTitle: string;
    lineModalDesc: string;
    copyIdBtn: string;
    copiedAlert: string;
    facilitiesTitle: string;
    facilitiesSubtitle: string;
    facilitiesList: { icon: string; title: string; desc: string }[];
    nearbyTitle: string;
    nearbySubtitle: string;
    nearbyList: { icon: string; title: string; distance: string; desc: string }[];
    faqTitle: string;
    faqSubtitle: string;
    faqList: { q: string; a: string }[];
    reviewsTitle: string;
    reviewsSubtitle: string;
    reviewsList: { name: string; role: string; text: string; rating: number }[];
    contactUs: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    mapLabel: string;
    copyright: string;
    calculatorTitle?: string;
    calculatorSubtitle?: string;
    calcRoomTypeLabel?: string;
    calcElecLabel?: string;
    calcWaterLabel?: string;
    calcCarLabel?: string;
    calcMotoLabel?: string;
    calcTotalMonthly?: string;
    calcMoveInDeposit?: string;
    calcCopySummary?: string;
    calcCopiedToast?: string;
    compareRoomsBtn?: string;
    compareModalTitle?: string;
    promptPayBtn?: string;
    promptPayTitle?: string;
    chatbotTitle?: string;
    chatbotSubtitle?: string;
    chatbotBadge?: string;
    heroBadge?: string;
    heroRating?: string;
    heroOpposite?: string;
    heroSecurity?: string;
    heroWifi?: string;
    heroLocationLabel?: string;
    heroLocationVal?: string;
    heroCheckInOutLabel?: string;
    heroCheckInOutVal?: string;
    heroDepositLabel?: string;
    heroDepositVal?: string;
    heroContractTerm?: string;
    heroShortTermNote?: string;
    heroContactBooking?: string;
    heroCallQuick?: string;
    heroSelectDaily?: string;
    heroSelectMonthly?: string;
    heroStatusDaily?: string;
    heroStatusMonthly?: string;
    rulesSubtitle?: string;
    leaseAgreementBtn?: string;
    dailyRoomsOverviewTitle?: string;
    dailyRoomsOverviewSub?: string;
    totalRoomsLabel?: string;
    occupiedRoomsLabel?: string;
    availableRoomsLabel?: string;
    monthlyOverviewTitle?: string;
    monthlyOverviewSub?: string;
    monthlyAvailableBadge?: string;
    roomsUnit?: string;
    keycardFeeLabel?: string;
    keycardFeeVal?: string;
    keyUnlockFeeLabel?: string;
    keyUnlockFeeVal?: string;
    officialAgreementTitle?: string;
    mapHeading?: string;
    mapSubheading?: string;
    openGoogleMapsBtn?: string;

    // Comparison Modal
    compareIntro?: string;
    compareHeaderRoomType?: string;
    compareHeaderRent?: string;
    compareHeaderDeposit?: string;
    compareHeaderStatus?: string;
    compareHeaderAir?: string;
    compareHeaderFurniture?: string;
    compareHeaderHighlights?: string;
    compareHeaderAction?: string;
    compareAvailableBadge?: string;
    compareFullBadge?: string;
    compareHasAir?: string;
    compareNoAir?: string;
    compareFurn12?: string;
    compareFurn8?: string;
    compareFurnYes?: string;
    compareFurnNone?: string;
    compareBookRoomBtn?: string;

    // Calculator
    calcUnitsBadge?: string;
    calcParkingTitle?: string;
    calcSummaryTitle?: string;
    calcRentBreakdown?: string;
    calcElecBreakdown?: string;
    calcWaterBreakdown?: string;
    calcCommonFeeBreakdown?: string;
    calcCarBreakdown?: string;
    calcMotoBreakdown?: string;
    calcTotalMoveIn?: string;
    calcEco?: string;
    calcAvg?: string;
    calcAirconOften?: string;
    calcHighUsage?: string;
    calcWaterRangeMin?: string;
    calcWaterRangeMid?: string;
    calcWaterRangeMax?: string;
    thbUnit?: string;

    // PromptPay / Bank Modal
    bankName?: string;
    bankNote?: string;
    bankAccLabel?: string;
    bankCopyBtn?: string;
    bankCopiedBtn?: string;
    bankAccNameLabel?: string;
    bankAccNameVal?: string;
    bankDailyNoticeTitle?: string;
    bankDailyNoticeDesc?: string;
    bankStepsTitle?: string;
    bankStep1?: string;
    bankStep2?: string;
    bankStep3?: string;
}

export const translations: Record<Language, Translations> = {
    th: {
        brand: "@สมุทรสาครสาขาสวนส้ม",
        navHome: "หน้าแรก",
        navRooms: "ประเภทห้องพัก",
        navFacilities: "สิ่งอำนวยความสะดวก",
        navNearby: "สถานที่ใกล้เคียง",
        navRules: "กฎระเบียบ",
        navFaq: "คำถามที่พบบ่อย",
        navReviews: "รีวิวผู้เข้าพัก",
        welcome: "ยินดีต้อนรับสู่ แอทสมุทรสาคร สาขาสวนส้ม",
        subheading: "ที่พักสะอาด ปลอดภัย ที่จอดรถในอาคาร",
        selectRoomBtn: "เลือกดูห้องพัก",
        roomSectionTitle: "ประเภทห้องพักรายวันและรายเดือน",
        roomSectionSubtitle: "พักผ่อนสบาย เป็นส่วนตัว แอร์เย็นฉ่ำ สิ่งอำนวยความสะดวกครบครัน",
        viewDetails: "ดูรายละเอียด",
        bookNow: "จองห้องพัก",
        pricePerNight: "บาท / คืน",
        dailyTab: "รายวัน (Daily)",
        monthlyTab: "รายเดือน (Monthly)",
        depositLabel: "ค่ามัดจำ",
        perMonth: "บาท / เดือน",
        singleRoom: {
            name: "ห้องพักเตียงเดี่ยว (Single Bed)",
            desc: "พักผ่อนสบาย เป็นส่วนตัว แอร์เย็นฉ่ำ",
            features: ["Wi-Fi ฟรี", "️ แอร์", "ทีวี", "ตู้เสื้อผ้าบิ้วอิน", "เครื่องทำน้ำอุ่น", "เครื่องเป่าผม", "ตู้เย็น"],
            price: "799"
        },
        twinRoom: {
            name: "ห้องพักเตียงคู่ (Twin Bed)",
            desc: "กว้างขวาง เหมาะสำหรับมาเป็นคู่หรือเพื่อนซี้",
            features: ["Wi-Fi ฟรี", "️ แอร์", "ทีวี", "ตู้เสื้อผ้าบิ้วอิน", "เครื่องทำน้ำอุ่น", "เครื่องเป่าผม", "ตู้เย็น"],
            price: "799"
        },
        extraRoom: {
            name: "ห้องพักที่นอนเสริม (Extra Bed)",
            desc: "รองรับครอบครัวหรือกลุ่มเพื่อน เพิ่มพื้นที่พักผ่อน",
            features: ["Wi-Fi ฟรี", "️ แอร์", "ทีวี", "ตู้เสื้อผ้าบิ้วอิน", "เครื่องทำน้ำอุ่น", "เครื่องเป่าผม", "ตู้เย็น"],
            price: "899"
        },
        monthlyRooms: [
            {
                id: 0,
                name: "ห้องเปล่า ไม่มีแอร์",
                desc: "ห้องพักราคาประหยัด สำหรับผู้ที่ต้องการความเป็นส่วนตัว",
                price: "3,100",
                deposit: "8,000",
                availableRoomsList: ["307", "504"],
                features: ["แอร์", "เฟอร์นิเจอร์", "ห้องน้ำในตัว"]
            },
            {
                id: 1,
                name: "ห้องเปล่า ไม่มีแอร์ + มุม",
                desc: "ห้องพักมุมส่วนตัว อากาศถ่ายเทสะดวก (รวมค่าห้องมุม +500 บาทแล้ว)",
                price: "3,400",
                deposit: "8,000",
                availableRoomsList: [],
                features: ["แอร์", "เฟอร์นิเจอร์", "ห้องมุม"]
            },
            {
                id: 2,
                name: "ห้องเปล่า มีแอร์",
                desc: "ห้องพักห้องเปล่า ติดตั้งแอร์เย็นฉ่ำพร้อมใช้งาน",
                price: "3,600",
                deposit: "8,500",
                availableRoomsList: [],
                features: ["️ เครื่องปรับอากาศ", "เฟอร์นิเจอร์"]
            },
            {
                id: 3,
                name: "ห้องเปล่า มีแอร์ + มุม",
                desc: "ห้องพักมุมส่วนตัว พร้อมแอร์เย็นสบาย (รวมค่าห้องมุม)",
                price: "3,600",
                deposit: "8,500",
                availableRoomsList: [],
                features: ["️ เครื่องปรับอากาศ", "เฟอร์นิเจอร์", "ห้องมุม"]
            },
            {
                id: 4,
                name: "ห้องเฟอร์นิเจอร์ 8 ชิ้น (มีแอร์)",
                desc: "พร้อมเข้าอยู่ ด้วยเฟอร์นิเจอร์พื้นฐาน 8 ชิ้น และเครื่องปรับอากาศ",
                price: "5,000",
                deposit: "10,000",
                availableRoomsList: ["809", "603", "804", "807"],
                features: ["️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์ 8 ชิ้น"]
            },
            {
                id: 5,
                name: "ห้องเฟอร์นิเจอร์ 12 ชิ้น (มีแอร์)",
                desc: "ครบครันและสะดวกสบายขึ้นด้วยเฟอร์นิเจอร์จัดเต็ม 12 ชิ้น (ครบชุดใหญ่)",
                price: "5,500",
                deposit: "10,000",
                availableRoomsList: ["208", "203", "605", "802", "809", "609"],
                features: ["️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์ 12 ชิ้น (ครบชุด)"]
            },
            {
                id: 6,
                name: "ห้องเฟอร์นิเจอร์ เตียงคู่ + มุม (มีแอร์)",
                desc: "ห้องมุมส่วนตัวกว้างขวาง พิเศษด้วยเตียงคู่นอนสบาย พร้อมแอร์",
                price: "6,000",
                deposit: "15,000",
                availableRoomsList: ["709", "209", "509"],
                features: ["️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์", "ห้องมุม", "️ เตียงคู่"]
            },
            {
                id: 7,
                name: "ห้องเฟอร์นิเจอร์ เตียงคู่ ระเบียงใหญ่ + มุม",
                desc: "ห้องมุม วิวสวย พร้อมระเบียงขนาดใหญ่สำหรับพักผ่อนภายนอก",
                price: "6,500",
                deposit: "15,000",
                availableRoomsList: ["501", "801", "601"],
                features: ["️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์", "ห้องมุม", "️ เตียงคู่", "ระเบียงใหญ่"]
            },
            {
                id: 8,
                name: "ห้องสูทเฟอร์นิเจอร์ + เตียง + แอร์",
                desc: "ห้องสูทขนาดใหญ่ 2 ห้องเชื่อมกัน (Connecting Suite) พร้อมเฟอร์นิเจอร์และแอร์ครบชุด",
                price: "8,400",
                deposit: "18,500",
                availableRoomsList: ["206 เชื่อมกับ 207"],
                features: ["2 ห้องเชื่อมกัน (Connecting Suite)", "️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์ครบชุด", "️ เตียงนอน"]
            }
        ],
        utilityTitle: "ค่าบริการและอัตราค่าสาธารณูปโภคเพิ่มเติม",
        electricityLabel: "ค่าไฟฟ้า (Electricity)",
        electricityVal: "หน่วยละ 9 บาท",
        waterLabel: "ค่าน้ำประปา (Water)",
        waterVal: "1-5 หน่วยแรก 200 บาท (หน่วยถัดไป หน่วยละ 35 บาท)",
        maintenanceLabel: "ค่าส่วนกลาง (Maintenance)",
        maintenanceVal: "200 บาท / เดือน",
        carParkingLabel: "ค่าจอดรถยนต์ (Car Parking)",
        carParkingVal: "300-500 บาท / เดือน",
        motoParkingLabel: "ค่าจอดรถมอเตอร์ไซค์ (Motorcycle Parking)",
        motoParkingVal: "100 บาท / เดือน",
        keyUnlockLabel: "ค่าบริการเปิดห้อง (กรณีลืมกุญแจ)",
        keyUnlockVal: "300 บาท / ครั้ง",
        rulesTitle: "กฎระเบียบการพักอาศัยของผู้เช่า (Tenant Regulations)",
        rulesList: [
            "ห้ามสูบบุหรี่ในอาคาร",
            "ห้ามดื่มสุราในพื้นที่ส่วนกลาง",
            "ห้ามทะเลาะวิวาท",
            "ห้ามส่งเสียงดังรบกวนผู้อื่น",
            "ห้ามถอดรองเท้าไว้หน้าห้อง",
            "ห้ามใช้แก๊ส",
            "ห้ามเลี้ยงสัตว์",
            "ห้ามทิ้งสิ่งของลงชักโครกและท่อระบายน้ำ",
            "ห้ามเจาะผนังหรือติดสติกเกอร์",
            "ห้ามเปิดปิดประตูเสียงดัง"
        ],
        rulesNotice: "ฝ่าฝืนครั้งที่ 1 เตือนด้วยวาจา | ครั้งที่ 2 ปรับครั้งละ 2,000 บาท/ครั้ง",
        checkInTitle: "วิธีการเช็คอิน (Daily Check-in)",
        checkInSteps: [
            "กรุณาแอด LINE ID: {lineId}",
            "สแกนจ่ายเงินผ่านเลขที่บัญชี 707-2-49085-6 ธนาคารกสิกรไทย ชื่อ นายกำธร เตชะเกษมสุข (ไม่รับเงินสด)",
            "ค่าที่พัก + เงินประกัน ห้องละ 500 บาท",
            "ชำระแล้วส่งสลิป พร้อมถ่ายบัตรประชาชนและแจ้งเลขห้องที่เข้าพัก LINE ID: {lineId}",
            "ให้พนักงานตรวจสอบความถูกต้องและรับกุญแจห้องพัก",
            "ลูกค้าต้องพกคีย์การ์ดเพื่อเปิดประตู",
            "Wi-Fi: กรุณาเลือก User ตามชั้นที่ท่านพัก"
        ],
        checkOutTitle: "วิธีการเช็คเอ้าท์ (Daily Check-out)",
        checkOutSteps: [
            "ลูกค้าปิดแอร์ ปิดไฟ ปิดประตู (ประตูไม่ต้องล็อก)",
            "นำกุญแจมาใส่ไว้ที่กล่องคืนกุญแจ พร้อมถ่ายรูปแจ้งใน LINE",
            "แจ้งเลขบัญชีใน LINE {lineId}",
            "หลังจากแม่บ้านตรวจสอบห้องแล้วพบว่าเรียบร้อย ไม่มีอะไรเสียหาย ทางที่พักจะทำเรื่องคืนเงินประกันให้"
        ],
        bankAccountTitle: "เลขที่บัญชีชำระเงิน (ไม่รับเงินสด)",
        bankAccountVal: "707-2-49085-6",
        bankNameVal: "ธนาคารกสิกรไทย",
        bankAccountName: "ชื่อบัญชี: นายกำธร เตชะเกษมสุข",
        wifiTitle: "รหัส Wi-Fi",
        wifiPass: "123456789",
        lineModalTitle: "ติดต่อเราผ่าน Line Official",
        lineModalDesc: "สแกนเพื่อติดต่อเรา หรือแอด ID: {lineId}",
        copyIdBtn: "คัดลอก ID Line",
        copiedAlert: "คัดลอก ID Line สำเร็จแล้ว!",
        facilitiesTitle: "สิ่งอำนวยความสะดวกส่วนกลาง",
        facilitiesSubtitle: "ครบครัน เพื่อความสะดวกสบาย ปลอดภัย และเป็นส่วนตัวที่สุด",
        facilitiesList: [
            { icon: "", title: "อินเทอร์เน็ตความเร็วสูง (Free Wi-Fi)", desc: "สัญญาณครอบคลุมทุกชั้นใช้งานฟรีตลอด 24 ชั่วโมง" },
            { icon: "️", title: "ระบบรักษาความปลอดภัย 24 ชม.", desc: "เข้า-ออกด้วยระบบคีย์การ์ด พร้อมกล้อง CCTV ทุกชั้น" },
            { icon: "🅿️", title: "ที่จอดรถบนอาคาร", desc: "มีพื้นที่จอดรถยนต์และรถมอเตอร์ไซค์สะดวก ปลอดภัย" },
            { icon: "️", title: "เครื่องปรับอากาศ & เฟอร์นิเจอร์ครบ", desc: "พร้อมเข้าอยู่อาศัยทันที" },
            { icon: "", title: "จุดบริการเครื่องซักผ้า", desc: "มีจุดบริการเครื่องซักผ้าชั้น5ถึงชั้น8" },
            { icon: "", title: "ทำเลนิคมอุตสาหกรรมสมุทรสาคร", desc: "การเดินทางสะดวกสบาย" }
        ],
        nearbyTitle: "สถานที่สำคัญใกล้เคียง",
        nearbySubtitle: "เชื่อมต่อทุกการเดินทาง แหล่งช้อปปิ้ง นิคมอุตสาหกรรม",
        nearbyList: [
            { icon: "", title: "นิคมอุตสาหกรรมสมุทรสาคร", distance: "5นาที", desc: "มีโรงงานมากกว่า100แห่ง" },
            { icon: "", title: "ตลาดนัดสุขมานิคม15", distance: "3นาที", desc: "ตลาดนัดชุมชน" },
            { icon: "️", title: "ตลาดนัดสวนส้ม", distance: "3นาที", desc: "แหล่งรวมอาหารและของกินมากมาย" },
            { icon: "", title: "ซีเจ เซเว่น", distance: "2นาที", desc: "ร้านสะดวกซื้อหลายแห่ง" }
            ,
            { icon: "📍", title: "เซ็นทรัลมหาชัย", distance: "15นาที", desc: "" },
            { icon: "📍", title: "สถานีรถไฟมหาชัย", distance: "20นาที", desc: "" },
            { icon: "📍", title: "Big C มหาชัย", distance: "15นาที", desc: "" },
            { icon: "📍", title: "TESCO Lotus", distance: "20นาที", desc: "" },
            { icon: "📍", title: "โฮมโปรมหาชัย", distance: "15นาที", desc: "" },
            { icon: "📍", title: "ดูโฮมบ้านแพ้ว", distance: "15นาที", desc: "" },
            { icon: "📍", title: "วัดป่ามหาไชย", distance: "20นาที", desc: "" },
            { icon: "📍", title: "อบต.บ้านเกาะ", distance: "15นาที", desc: "" },
            { icon: "📍", title: "อบต.ชัยมงคล", distance: "15นาที", desc: "" }
        ],
        securityTitle: "ระบบรักษาความปลอดภัย",
        securitySubtitle: "เพื่อความอุ่นใจในการพักอาศัย",
        securityList: [
            { badge: "ตำรวจรักษาการ", title: "ตลอด24ชม.", desc: "" },
            { badge: "ประตูระบบคีย์การ์ด", title: "เข้า-ออกประตู ด้วยคีย์การ์ด", desc: "" },
            { badge: "Heat detector", title: "ระบบตรวจจับความร้อน", desc: "" },
            { badge: "ตู้ดับเพลิงทุกชั้น", title: "เพื่อความปลอดภัยสูงสุด", desc: "" },
            { badge: "กล้องวงจรปิดCCTV", title: "รักษาความปลอดภัย ตรวจสอบความเรียบร้อยของสถานที่หรือคนที่คุณรักได้ตลอดเวลา ผ่านระบบออนไลน์", desc: "" },
            { badge: "เสาล่อฟ้า", title: "เพื่อความปลอดภัยต่อชีวิตและทรัพย์สินของผู้พักอาศัย", desc: "" },
            { badge: "Smoke detector", title: "ระบบตรวจจับควัน", desc: "" },
            { badge: "Alarm", title: "กริ่งแจ้งเหตุไฟไหม้ เพิ่มความปลอดภัยในยามฉุกเฉิน", desc: "" }
        ],
        faqTitle: "คำถามที่พบบ่อย (FAQ)",
        faqSubtitle: "ไขข้อข้องใจเกี่ยวกับการเข้าพักและการเช่าห้องพักรายวัน / รายเดือน",
        faqList: [
            { q: "เวลาเช็คอินและเช็คเอ้าท์สำหรับห้องพักรายวันคือช่วงไหน?", a: "เช็คอินได้ตั้งแต่เวลา 14:00 น. เป็นต้นไป และเช็คเอ้าท์ก่อนเวลา 12:00 น. (เที่ยงวัน) ของวันถัดไปค่ะ" },
            { q: "ได้รับเงินมัดจำประกันห้องคืนตอนไหน?", a: "หลังจากแม่บ้าน/พนักงานตรวจเช็คห้องพักเสร็จสิ้นและไม่พบสิ่งของเสียหาย ทางที่พักจะดำเนินการโอนเงินมัดจำคืนให้ท่านค่ะ" },
            { q: "การจองห้องพักรายวันต้องจ่ายเงินมัดจำเท่าไหร่?", a: "มีค่ามัดจำประกันห้องพักรายวันละ 500 บาท/ห้อง ซึ่งจะได้รับเงินคืนเต็มจำนวน หลังตรวจสอบห้องเรียบร้อยค่ะ" },
            { q: "สัญญาเช่าห้องพักรายเดือนมีระยะเวลากี่เดือน?", a: "สัญญาเช่าระยะยาว 1 ปีค่ะ (หากทำสัญญาเช่าสั้นกว่า 1 ปี จะมีการบวกค่าเช่ารายเดือนของห้องเพิ่ม 1,000 บาท/เดือนค่ะ)" },
            { q: "สามารถเลี้ยงสัตว์เลี้ยงภายในห้องพักได้หรือไม่?", a: "เพื่อความเป็นระเบียบเรียบร้อยและความเงียบสงบของผู้พักอาศัยทุกท่าน ทางที่พักไม่อนุญาตให้เลี้ยงสัตว์เลี้ยงทุกชนิดค่ะ" },
            { q: "มีบริการที่จอดรถยนต์และมอเตอร์ไซค์หรือไม่?", a: "มีพื้นที่จอดรถยนต์ (300-500 บาท/เดือน) และมอเตอร์ไซค์ (100 บาท/เดือน) พร้อมระบบกล้องวงจรปิดดูแลตลอด 24 ชั่วโมงค่ะ" },
            { q: "หากลืมกุญแจห้องพัก มีค่าบริการเปิดห้องเท่าไหร่?", a: "หากลูกห้องท่านใดลืมกุญแจห้องรายเดือน ทางที่พักจะมีค่าใช้จ่ายเปิดห้องครั้งละ 300 บาทค่ะ" }
        ],
        reviewsTitle: "ความประทับใจจากผู้เข้าพัก",
        reviewsSubtitle: "รีวิวและเสียงตอบรับจากลูกค้าจริงที่เคยเข้าพักกับ แอทสมุทรสาคร มหาชัย",
        reviewsList: [
            { name: "คุณกิตติศักดิ์ พ.", role: "ผู้เข้าพักรายวัน", text: "ห้องพักสะอาดมากครับ แอร์เย็นฉ่ำ เดินทางสะดวกมาก พนักงานบริการดีและรวดเร็วครับ", rating: 5 },
            { name: "คุณนภาวรรณ ส.", role: "ผู้เช่ารายเดือน", text: "พักรายเดือนที่นี่มา 1 ปีแล้วค่ะ ปลอดภัย เงียบสงบ ทำเลดีหาของกินง่าย", rating: 5 },
            { name: "คุณอนันต์ ต.", role: "ผู้เข้าพักรายวัน", text: "จองง่าย ระบบเช็คอินสะดวกมากครับ มีที่จอดรถกว้างขวาง คุ้มค่าคุ้มราคามากครับ มีโอกาสกลับมาพักอีกแน่นอน", rating: 5 }
        ],
        contactUs: "ติดต่อเรา",
        addressLabel: "ที่อยู่",
        addressVal: "อยู่ในนิคมอุตสาหกรรมสมุทรสาคร ซอย 15 หลังโรงเรียนบ้านยกกระบัตร",
        phoneLabel: "เบอร์ติดต่อ",
        phoneVal: "065 464 7459",
        mapLabel: "แผนที่เดินทาง Google Maps",
        copyright: "สงวนลิขสิทธิ์ © 2026 แอทสมุทรสาคร สาขาสวนส้ม @samutsakorn suansom",
        calculatorTitle: "เครื่องมือคำนวณค่าใช้จ่ายรายเดือนสุทธิ",
        calculatorSubtitle: "ประเมินค่าใช้จ่ายประจำเดือน (ค่าเช่า + ค่าน้ำ + ค่าไฟ + ค่าบริการ) ได้ทันทีแบบเรียลไทม์",
        calcRoomTypeLabel: "เลือกรูปแบบห้องพักรายเดือน",
        calcElecLabel: "ประมาณการหน่วยไฟฟ้าที่ใช้ (หน่วยละ 9 บาท)",
        calcWaterLabel: "ประมาณการหน่วยน้ำประปาที่ใช้",
        calcCarLabel: "ค่าจอดรถยนต์ (300-500 บาท/เดือน)",
        calcMotoLabel: "ค่าจอดรถมอเตอร์ไซค์ (100 บาท/เดือน)",
        calcTotalMonthly: "ยอดรวมค่าใช้จ่ายประเมินรายเดือน",
        calcMoveInDeposit: "เงินมัดจำแรกเข้าพัก",
        calcCopySummary: "คัดลอกสรุปรายการคำนวณ",
        calcCopiedToast: "คัดลอกสรุปรายการคำนวณเรียบร้อยแล้ว!",
        promptPayBtn: "สแกน PromptPay / บัญชีโอนเงิน",
        promptPayTitle: "ข้อมูลบัญชีโอนเงินชำระค่าที่พัก & มัดจำ",
        chatbotTitle: "ผู้ช่วยตอบคำถามอัตโนมัติ 24 ชม.",
        chatbotSubtitle: "สอบถามข้อมูลห้องพัก กฎระเบียบ การคืนมัดจำ หรือการเดินทาง",
        chatbotBadge: "แชทสด Chatbot",
        fanFutonRoom: {
            name: "ห้องฟูกพัดลม (Fan Futon Room)",
            desc: "ห้องพักราคาประหยัด บรรยากาศสบาย พร้อมพัดลมและชุดฟูกที่นอน",
            features: ["พัดลม", "️ ฟูกที่นอน", "ฟรี Wi-Fi", "ห้องน้ำในตัว"],
            price: "450"
        },
        suiteRoom: {
            name: "ห้องสูทเฟอร์นิเจอร์ + ฟูก (Connecting Suite Room)",
            desc: "ห้องพัก 2 ห้องเชื่อมกัน (Connecting Rooms) พร้อมเฟอร์นิเจอร์ครบชุดและฟูกที่นอน",
            features: ["2 ห้องเชื่อมกัน", "️ เครื่องปรับอากาศ", "️ เฟอร์นิเจอร์ครบชุด", "️ ชุดฟูกที่นอน", "ฟรี Wi-Fi"],
            price: "1,299"
        },
        heroBadge: "@samutsakorn suansom • ที่พักสมุทรสาคร",
        heroRating: "คะแนนรีวิวผู้เข้าพัก",
        heroOpposite: "นิคมสมุทรสาคร",
        heroSecurity: "คีย์การ์ด & CCTV 24 ชม.",
        heroWifi: "ฟรี Wi-Fi",
        heroLocationLabel: "ทำเลที่ตั้ง (Location)",
        heroLocationVal: "นิคมสมุทรสาคร",
        heroCheckInOutLabel: "เวลาเช็คอิน / เช็คเอ้าท์",
        heroCheckInOutVal: "เช็คอิน 14:00 | เช็คเอ้าท์ก่อน 12:00",
        heroDepositLabel: "เงินมัดจำประกันห้อง",
        heroDepositVal: "500 บาท/ห้อง (คืนเต็มจำนวน)",
        heroContractTerm: "สัญญาระยะยาว 1 ปีขึ้นไป",
        heroShortTermNote: "สั้นกว่า 1 ปี +1,000 บ./เดือน",
        heroContactBooking: "ติดต่อจองห้องพัก",
        heroCallQuick: "โทรจองด่วน",
        heroSelectDaily: "เลือกดูห้องพักรายวัน",
        heroSelectMonthly: "เลือกดูห้องพักรายเดือน",
        heroStatusDaily: "ห้องพักรายวัน (เช็คอิน 14:00 | เช็คเอ้าท์ 12:00 | มัดจำ 500 บาท)",
        heroStatusMonthly: "ห้องพักรายเดือน (สัญญา 1 ปีขึ้นไป | สัญญาสั้นกว่า 1 ปี +1,000 บ./เดือน)",
        rulesSubtitle: "ข้อปฏิบัติตามมาตรฐานเพื่อความสะอาด ความปลอดภัย และความเป็นส่วนตัวของผู้พักอาศัยทุกท่าน",
        leaseAgreementBtn: "ดูฉบับเต็ม: สัญญาและกฎข้อระเบียบการเช่าหอพัก (Official Lease Agreement)",
        dailyRoomsOverviewTitle: "รูปแบบห้องพักรายวัน",
        dailyRoomsOverviewSub: "เช็คความพร้อม จำนวนห้องทั้งหมด เต็มแล้วกี่ห้อง และเหลือว่างกี่ห้อง",
        totalRoomsLabel: "ทั้งหมด:",
        occupiedRoomsLabel: "เต็มแล้ว:",
        availableRoomsLabel: "เหลือว่าง:",
        monthlyOverviewTitle: "รูปแบบห้องพักรายเดือน",
        monthlyOverviewSub: "อัปเดตหมายเลขห้องพักที่ว่างแบบเรียลไทม์ สอบถามหรือจองห้องได้ทันที",
        monthlyAvailableBadge: "มีห้องว่างทั้งหมด {count} ห้อง",
        roomsUnit: "ห้อง",
        keycardFeeLabel: "ค่าซื้อคีย์การ์ดเข้าอาคาร",
        keycardFeeVal: "100 บาท / ใบ",
        keyUnlockFeeLabel: "ค่าบริการเปิดห้อง (กรณีลืมกุญแจ)",
        keyUnlockFeeVal: "300 บาท / ครั้ง",
        officialAgreementTitle: "สัญญาและกฎข้อระเบียบข้อบังคับในการเช่าหอพัก",
        mapHeading: "️ แผนที่ตั้ง แอทสมุทรสาคร สาขาสวนส้ม",
        mapSubheading: "หลังโรงเรียนบ้านยกกระบัตร",
        openGoogleMapsBtn: "นำทางด้วย Google Maps",
        thbUnit: "บาท",
        compareRoomsBtn: "ตารางเปรียบเทียบห้องพักรายเดือน",
        compareModalTitle: "ตารางเปรียบเทียบคุณสมบัติห้องพักรายเดือน",
        compareIntro: "เลือกดูข้อแตกต่างของแต่ละรูปแบบห้องพัก เพื่อความเหมาะสมกับไลฟ์สไตล์และงบประมาณของคุณที่สุด",
        compareHeaderRoomType: "ประเภทห้องพักรายเดือน",
        compareHeaderRent: "อัตราค่าเช่า (บาท/เดือน)",
        compareHeaderDeposit: "เงินมัดจำแรกเข้า (บาท)",
        compareHeaderStatus: "สถานะ & เลขห้องว่าง",
        compareHeaderAir: "เครื่องปรับอากาศ",
        compareHeaderFurniture: "เฟอร์นิเจอร์",
        compareHeaderHighlights: "จุดเด่นพิเศษ",
        compareHeaderAction: "จองห้อง",
        compareAvailableBadge: "ว่าง {count} ห้อง",
        compareFullBadge: "เต็มแล้ว",
        compareHasAir: "️ มีแอร์",
        compareNoAir: "ไม่มีแอร์",
        compareFurn12: "12 ชิ้น (ครบชุดใหญ่)",
        compareFurn8: "8 ชิ้น (ชุดมาตรฐาน)",
        compareFurnYes: "มีเฟอร์นิเจอร์",
        compareFurnNone: "ไม่มี (ห้องเปล่า)",
        compareBookRoomBtn: "จองห้องนี้",

        calcEco: "0 (ประหยัด)",
        calcAvg: "100 (เฉลี่ย)",
        calcAirconOften: "250 (เปิดแอร์บ่อย)",
        calcHighUsage: "400 (ใช้มาก)",
        calcWaterRangeMin: "1-5 หน่วย (ขั้นต่ำ 200บ.)",
        calcWaterRangeMid: "15 หน่วย",
        calcWaterRangeMax: "30 หน่วย",
        calcParkingTitle: "🅿️ บริการที่จอดรถเพิ่มเติม",
        calcSummaryTitle: "สรุปรายการคำนวณประเมินผล",
        calcRentBreakdown: "ค่าเช่าห้องพัก",
        calcElecBreakdown: "ค่าไฟฟ้าประมาณการ",
        calcWaterBreakdown: "ค่าน้ำประปาประมาณการ",
        calcCommonFeeBreakdown: "ค่าส่วนกลางอาคาร",
        calcCarBreakdown: "ค่าจอดรถยนต์",
        calcMotoBreakdown: "ค่าจอดรถมอเตอร์ไซค์",
        calcTotalMoveIn: "งบรวมแรกเข้าพัก (มัดจำ + เดือนแรก)",
        calcUnitsBadge: "หน่วย",

        bankName: "ธนาคารกสิกรไทย (Kasikornbank)",
        bankNote: "บริการชำระเงินโอนผ่านบัญชีธนาคาร (ไม่รับเงินสด)",
        bankAccLabel: "เลขที่บัญชี:",
        bankCopyBtn: "คัดลอกเลขบัญชี",
        bankCopiedBtn: "คัดลอกแล้ว!",
        bankAccNameLabel: "ชื่อบัญชี:",
        bankAccNameVal: "นายกำธร เตชะเกษมสุข",
        bankDailyNoticeTitle: "การชำระเงินห้องพักรายวัน:",
        bankDailyNoticeDesc: "ค่าห้องพัก + ค่ามัดจำประกันห้อง 500 บาท/ห้อง (ได้รับเงินมัดจำคืนเต็มจำนวนหลังเช็คเอาท์)",
        bankStepsTitle: "ขั้นตอนหลังชำระเงิน:",
        bankStep1: "ถ่ายรูป/เซฟสลิปโอนเงิน",
        bankStep2: "ถ่ายภาพบัตรประชาชนและแจ้งเลขห้องพัก",
        bankStep3: "ส่งสลิปแจ้งยืนยันทาง LINE ID: {lineId}",
    },
};
