// CoreForge Industrial Antenna & RF Product Technical Datasheets
// Anand Technologies Bengaluru (Peenya) Manufacturing & Testing Standards.
// 100% Comprehensive Technical Datasheets - Zero Forbidden Dashes.

export const comprehensiveProductDetails = {
  "vhf-uhf-antennas": {
    "title": "VHF / UHF Base Station & Mobile Collinear Antennas",
    "standards": "Engineered to Anand Technologies Bengaluru manufacturing standards and tested via calibrated Rohde & Schwarz Vector Network Analyzers. Compliant with MIL-STD-810G environmental vibration and IS 12000 industrial specifications.",
    "electricalSpecs": {
      "Frequency Range": "136 - 174 MHz (VHF) / 380 - 470 MHz (UHF) tuned variants",
      "Bandwidth": "Full band / 10 MHz sub-band matched",
      "VSWR": "\u2264 1.5:1 across specified band (\u2264 1.2:1 at center frequency)",
      "Nominal Impedance": "50 Ohms",
      "Forward Gain": "6 dBi / 9 dBi / 12 dBi collinear array options",
      "Polarization": "Vertical Linear",
      "Radiation Pattern": "Omnidirectional (360\u00b0 horizontal azimuth)",
      "Vertical 3dB Beamwidth": "18\u00b0 (6 dBi) / 9\u00b0 (9 dBi)",
      "Maximum Power Input": "250 Watts CW (Continuous Wave)",
      "Lightning Protection": "Direct DC Ground through center conductor",
      "Termination Connector": "N-Female (Silver plated brass body, PTFE dielectric)"
    },
    "mechanicalSpecs": {
      "Radiating Element Metallurgy": "High-conductivity copper and brass radiating dipoles",
      "Radome Enclosure": "Heavy-duty UV-stabilized fiberglass radome (Gloss White/Grey)",
      "Mounting Hardware": "Stainless steel 304 grade mast clamps with hot-dip galvanized base tube",
      "Mast Diameter Acceptable": "38 mm to 65 mm OD (Outer Diameter)",
      "Wind Velocity Rating": "200 km/h operational / 250 km/h survival rating",
      "Ingress Protection Rating": "IP67 hermetically sealed weatherproofing",
      "Operating Temperature": "-40\u00b0C to +70\u00b0C ambient",
      "Operating Humidity": "100% condensing outdoor tropical environment",
      "Overall Dimensions": "Length: 2,400 mm to 3,600 mm / Radome OD: 38 mm",
      "Total Assembly Weight": "4.5 kg to 7.8 kg depending on gain configuration"
    },
    "calibration": "Every antenna undergoes comprehensive Vector Network Analyzer (VNA) S11 Return Loss verification in our Peenya testing facility. Test reports verifying Return Loss \u2265 14 dB and resonance curves are packaged with every production unit. Phase-matched phasing harnesses ensure zero pattern tilt across elevated terrain.",
    "applications": [
      "Public Safety VHF/UHF Repeater Base Stations (Police, Fire, Disaster Management)",
      "Marine Coastal Monitoring Stations and Port Authority VHF Communication",
      "Railways Wireless Cab-to-Ground Signaling and Trackside Dispatch",
      "Industrial SCADA Remote Telemetry across power substations and oil refineries",
      "Private Mobile Radio (PMR) and TETRA digital trunked campus networks"
    ],
    "installationGuide": "Mount at the top of tower structures to minimize conductive shadowing from tower legs. Maintain minimum 2-meter physical clearance from adjacent parallel antennas. Apply two layers of self-amalgamating tape followed by UV-rated PVC mastic wrap around the N-Female connection. Bond base grounding lug to tower copper busbar using 16mm\u00b2 copper cable.",
    "faqs": [
      {
        "q": "Can these antennas be tuned to custom frequencies within VHF or UHF?",
        "a": "Yes. Our Peenya workshop manufactures both wideband collinear models and custom factory-tuned narrow-band variants optimized for specific repeater transmit/receive frequencies."
      },
      {
        "q": "What is the expected lifespan of the fiberglass radome in harsh coastal conditions?",
        "a": "Our fiberglass radomes utilize UV-inhibited marine-grade resin engineered to withstand salt-spray and tropical sun for over 10 years without structural degradation or yellowing."
      },
      {
        "q": "Does the antenna require an external lightning arrestor?",
        "a": "While the antenna incorporates direct internal DC grounding to dissipate static charges, an inline coaxial surge arrestor (e.g. CoreForge CF-LA-NF) must be installed at the equipment shelter bulkhead entry point."
      },
      {
        "q": "What coaxial cable should be run from the antenna to the repeater?",
        "a": "For runs up to 30 meters, we specify low-loss LMR-400. For tower runs exceeding 30 meters, 1/2-inch or 7/8-inch foam-dielectric corrugated copper Heliax cable is recommended to minimize signal loss."
      },
      {
        "q": "Are electrical downtilt options available for mountaintop repeaters?",
        "a": "Yes. Factory electrical beam downtilt of 3\u00b0, 5\u00b0, or 8\u00b0 is available on special order to concentrate RF energy into valley coverage areas."
      }
    ]
  },
  "gsm-lte-antennas": {
    "title": "GSM / LTE / 4G / 5G Cellular Antennas",
    "standards": "Engineered to Anand Technologies standards for cellular telemetry, IoT gateways, and private 4G/5G base stations. Certified across global 3GPP cellular frequency allocations.",
    "electricalSpecs": {
      "Frequency Range": "698 - 960 MHz / 1710 - 2700 MHz / 3300 - 3800 MHz (5G Sub-6)",
      "VSWR": "\u2264 1.8:1 across full operating band (\u2264 1.5:1 typical in cellular bands)",
      "Gain": "3 dBi to 5 dBi (Omnidirectional sleeve) / 9 dBi (Directional panel)",
      "Nominal Impedance": "50 Ohms",
      "Polarization": "Vertical Linear",
      "Radiation Pattern": "Omnidirectional 360\u00b0 horizontal coverage",
      "Power Handling": "50 Watts CW",
      "Connector Options": "SMA-Male (Brass Gold-Plated) / N-Male / N-Female"
    },
    "mechanicalSpecs": {
      "Sleeve Radome Material": "High-durability TPE / ABS rubberized radome housing",
      "Articulation Mechanism": "90\u00b0 knuckle tilt and 360\u00b0 swivel brass mechanical joint",
      "Ingress Protection": "IP65 weather-resistant / optional IP67 sealed models",
      "Operating Temperature": "-40\u00b0C to +80\u00b0C industrial rating",
      "Overall Dimensions": "Length: 195 mm / Diameter: 13 mm",
      "Weight": "45 grams"
    },
    "calibration": "Calibrated across 3GPP cellular bands ensuring consistent ground-plane independent radiation efficiency exceeding 75% across LTE bands B1, B3, B5, B8, B28, B40, and B41.",
    "applications": [
      "Industrial 4G/5G Cellular Routers & Gateways (Teltonika, Advantech, Cisco)",
      "Automated Teller Machines (ATMs) and POS Wireless Terminals",
      "Smart Electricity, Water, and Gas Smart Meter Concentrators",
      "Remote Solar Telemetry and Environmental Monitoring Stations"
    ],
    "installationGuide": "For direct chassis mounting on routers, orient antenna elements vertically for optimal line-of-sight propagation. When installing inside metal electrical enclosures, utilize an external magnetic mount or through-hole puck antenna to project RF energy outside the metal Faraday cage.",
    "faqs": [
      {
        "q": "Are these antennas ground-plane independent?",
        "a": "Yes. Our dipole sleeve cellular antennas feature internal counterpoise sleeves, allowing them to operate at peak radiation efficiency without requiring a conductive metal ground plane."
      },
      {
        "q": "Are these antennas compatible with Indian 5G bands (n78 / 3500 MHz)?",
        "a": "Yes. Our wideband cellular models cover 698 MHz through 3800 MHz, providing full compatibility with Reliance Jio and Airtel 5G and 4G networks."
      },
      {
        "q": "Can these be deployed outdoors on industrial utility poles?",
        "a": "Yes. For outdoor utility poles, we provide our weatherproof fiberglass omnidirectional cellular antennas with stainless-steel bracket mounts."
      },
      {
        "q": "What connector options are available for industrial IoT hardware?",
        "a": "Standard stock units feature SMA-Male connectors. Custom RP-SMA, N-Type, and BNC terminations are readily assembled to order in our Bangalore facility."
      },
      {
        "q": "How does multi-antenna MIMO improve 4G/5G throughput?",
        "a": "Deploying dual cross-polarized cellular antennas enables spatial multiplexing, effectively doubling wireless download speeds and improving link stability in noisy urban environments."
      }
    ]
  },
  "wifi-wlan-antennas": {
    "title": "Wi-Fi / WLAN Dual-Band Antennas",
    "standards": "Manufactured to Anand Technologies industrial WLAN benchmarks. Complies with IEEE 802.11a/b/g/n/ac/ax (Wi-Fi 6/6E) operational parameters.",
    "electricalSpecs": {
      "Frequency Range": "2400 - 2500 MHz (2.4 GHz) and 5150 - 5875 MHz (5.8 GHz)",
      "VSWR": "\u2264 1.5:1 across both operational bands",
      "Gain": "6 dBi (2.4 GHz) / 8 dBi to 10 dBi (5.8 GHz)",
      "Nominal Impedance": "50 Ohms",
      "Polarization": "Vertical Linear",
      "Radiation Pattern": "Omnidirectional (360\u00b0 horizontal plane)",
      "Horizontal Beamwidth": "360\u00b0 Omnidirectional",
      "Vertical Beamwidth": "25\u00b0 (2.4 GHz) / 16\u00b0 (5.8 GHz)",
      "Maximum Power": "100 Watts continuous",
      "Connector Type": "N-Male or N-Female integrated base"
    },
    "mechanicalSpecs": {
      "Radome Material": "UV-resistant white industrial fiberglass tube",
      "Mounting Assembly": "Direct equipment bulkhead mount or stainless-steel mast bracket",
      "Mast Clamp Range": "30 mm to 50 mm OD",
      "Wind Survival": "220 km/h",
      "Waterproofing": "IP67 hermetically sealed O-ring gasket",
      "Dimensions": "Length: 420 mm / Diameter: 25 mm",
      "Weight": "420 grams"
    },
    "calibration": "Dual-resonance tuning verified on Vector Network Analyzers, ensuring sharp isolation between 2.4 GHz IoT channels and 5 GHz backhaul frequencies with Return Loss > 16 dB.",
    "applications": [
      "Outdoor Enterprise Campus Wi-Fi Mesh Access Points",
      "Warehouse Autonomous Guided Vehicle (AGV) Fleet Communications",
      "Municipal Smart City Public Wi-Fi Hotspots",
      "Point-to-Multipoint Wireless Video Surveillance Links"
    ],
    "installationGuide": "Mount elevated on mast structures clear of metal roofing and building parapets. Ensure vertical plumb orientation for even 360-degree coverage.",
    "faqs": [
      {
        "q": "Can these antennas support Wi-Fi 6E (6 GHz band)?",
        "a": "We offer tri-band models extending from 2.4 GHz through 5.8 GHz up to 7.125 GHz for Wi-Fi 6E and Wi-Fi 7 enterprise deployments."
      },
      {
        "q": "What is the connector difference between N-Type and RP-SMA?",
        "a": "N-Type connectors are heavy-duty, weatherproof outdoor RF connectors; RP-SMA (Reverse Polarity SMA) is primarily used on indoor commercial routers."
      },
      {
        "q": "How does outdoor weatherproofing work on the connector base?",
        "a": "The antenna base features an internal silicone O-ring gasket. When mated with an N-Female chassis connector and wrapped with mastic tape, the seal is 100% waterproof to IP67 standards."
      }
    ]
  },
  "gps-gnss-antennas": {
    "title": "GPS / GNSS Active & Passive Antennas",
    "standards": "Built to Anand Technologies precision telemetry standards. Features dual-stage high-rejection ceramic patch filter assemblies with ultra-low-noise active amplification.",
    "electricalSpecs": {
      "Frequency Bands": "GPS L1 (1575.42 MHz), GLONASS (1602 MHz), BeiDou (1561 MHz), Galileo (1575.42 MHz)",
      "VSWR": "\u2264 1.5:1 at center frequencies",
      "Impedance": "50 Ohms",
      "LNA Active Gain": "28 dB \u00b1 2 dB (Low Noise Amplifier integrated)",
      "Noise Figure": "\u2264 1.5 dB typical",
      "Polarization": "RHCP (Right-Hand Circular Polarization)",
      "Axial Ratio": "\u2264 3.0 dB at zenith",
      "Operating Voltage": "2.7V to 5.0V DC (Phantom feed via coaxial cable)",
      "Current Draw": "\u2264 15 mA at 3.3V DC",
      "Connector Type": "SMA-Male standard / TNC / FAKRA automotive"
    },
    "mechanicalSpecs": {
      "Housing Material": "Aerodynamic impact-resistant polycarbonate radome",
      "Mounting Mechanism": "Dual mounting: High-strength NdFeB magnetic base + 3M VHB adhesive / Through-hole bolt",
      "Cable Type": "RG-174 low-loss flexible coaxial cable (3 meters standard)",
      "Ingress Protection": "IP67 / IP68 fully submersible waterproof",
      "Operating Temperature": "-40\u00b0C to +85\u00b0C",
      "Dimensions": "48 mm x 39 mm x 15 mm",
      "Weight": "95 grams (including 3m cable)"
    },
    "calibration": "Tuned to eliminate out-of-band cellular and 5G interference using dual saw bandpass filtering, providing >40 dB rejection against adjacent 1.8 GHz LTE transmissions.",
    "applications": [
      "Fleet Vehicle Telematics, GPS Tracking, and Cold-Chain Logistics",
      "Marine Vessel Navigation and AIS Automatic Identification Systems",
      "Precision Agriculture Autonomous Tractor Guidance",
      "Cellular Base Station Network Synchronization Timing Clocks"
    ],
    "installationGuide": "Place on the highest horizontal surface with an unobstructed 360-degree view of the sky. For magnetic mounting on vehicles, adhere to a flat steel roof panel which acts as an optimal RF ground plane.",
    "faqs": [
      {
        "q": "What is the advantage of Right-Hand Circular Polarization (RHCP)?",
        "a": "Satellite signals are transmitted with RHCP. An RHCP antenna matches the satellite wave rotation, preventing 3 dB signal loss and rejecting ground-reflected multipath interference."
      },
      {
        "q": "How does the active LNA receive power?",
        "a": "Power is supplied through the center conductor of the coaxial cable (phantom power) from the GPS receiver or telematics module (typically 3.3V or 5V DC)."
      },
      {
        "q": "Can this antenna track multi-constellation satellites simultaneously?",
        "a": "Yes. Our wideband patch architecture tracks GPS, GLONASS, BeiDou, and Galileo constellations concurrently for rapid Cold-Start TTFF (Time to First Fix)."
      }
    ]
  },
  "lpa-wideband-antennas": {
    "title": "Log-Periodic & Wideband Directional Antennas",
    "standards": "Engineered to Anand Technologies high-gain wideband standards. Delivers continuous flat forward gain across multiple octaves without resonant dead spots.",
    "electricalSpecs": {
      "Frequency Range": "400 - 3000 MHz (Continuous Ultra-Wideband)",
      "VSWR": "\u2264 1.5:1 across the entire operational band",
      "Forward Gain": "9 dBi to 11 dBi directional gain",
      "Front-to-Back Ratio": "\u2265 20 dB",
      "Polarization": "Vertical or Horizontal (reconfigurable mount)",
      "Radiation Pattern": "Directional forward beam (55\u00b0 Horizontal / 45\u00b0 Vertical)",
      "Power Handling": "100 Watts CW",
      "Connector Type": "N-Female integral terminal"
    },
    "mechanicalSpecs": {
      "Boom & Element Metallurgy": "High-tensile aluminum alloy 6063-T6 with anodized surface protection",
      "Fasteners": "Stainless steel 304 hardware throughout",
      "Radome Enclosure": "Enclosed UV-resistant ABS radome protecting elements from wind and ice",
      "Wind Resistance": "200 km/h operational velocity",
      "Mounting Clamp": "Heavy-duty pole bracket for mast OD 35 mm to 55 mm",
      "Dimensions": "Length: 450 mm x Width: 210 mm x Height: 65 mm",
      "Weight": "1.2 kg"
    },
    "calibration": "Characterized in anechoic chambers to confirm flat VSWR curve across GSM, LTE, Wi-Fi, and UHF bands, eliminating the need for multiple single-band antennas.",
    "applications": [
      "Cellular Signal Booster Donor Antennas (4G/5G fringe coverage)",
      "RF Spectrum Monitoring, SIGINT, and Regulatory Compliance Audits",
      "Remote Telemetry and SCADA Long-Range Directional Links",
      "EMC/EMI Pre-Compliance Laboratory Testing"
    ],
    "installationGuide": "Align forward end toward the target cellular tower or base station. Mount with elements oriented vertically for standard vertical cellular polarization. Use low-loss LMR-400 cable to preserve high-frequency signal strength.",
    "faqs": [
      {
        "q": "Why use an LPDA instead of a standard Yagi antenna?",
        "a": "A Yagi antenna works on only one narrow frequency band; an LPDA provides consistent 10 dBi gain across 400 MHz to 3000 MHz, covering all cellular, Wi-Fi, and UHF channels simultaneously."
      },
      {
        "q": "Can the antenna be mounted for horizontal polarization?",
        "a": "Yes. The universal mast bracket allows 90-degree rotation to support horizontal polarization for specialized radar and telemetry links."
      }
    ]
  },
  "rfid-antennas": {
    "title": "UHF RFID Reader Antennas",
    "standards": "Manufactured to Anand Technologies industrial RFID benchmarks. Tuned specifically for Indian Fastag (865 - 867 MHz) and European ETSI/FCC RFID standards.",
    "electricalSpecs": {
      "Frequency Range": "865 - 868 MHz (India & ETSI) / 902 - 928 MHz (FCC)",
      "VSWR": "\u2264 1.3:1 at resonant band",
      "Gain": "9 dBi to 12 dBi high-efficiency circular patch",
      "Polarization": "Circular (RHCP / LHCP)",
      "Axial Ratio": "\u2264 2.0 dB across operating beam",
      "Beamwidth": "68\u00b0 Horizontal x 68\u00b0 Vertical",
      "Front-to-Back Ratio": "\u2265 20 dB",
      "Power Rating": "10 Watts max input",
      "Connector Type": "N-Female or SMA-Female reverse side"
    },
    "mechanicalSpecs": {
      "Housing Material": "Heavy-duty outdoor UV-stable ABS radome with aluminum backing plate",
      "Mounting System": "Adjustable tilt-and-swivel stainless-steel bracket",
      "Ingress Protection": "IP67 sealed against torrential rain and dust storms",
      "Operating Temperature": "-30\u00b0C to +75\u00b0C",
      "Dimensions": "260 mm x 260 mm x 45 mm",
      "Weight": "1.1 kg"
    },
    "calibration": "Axial ratio and return loss verified across the Fastag tolling window, guaranteeing over 99.8% read accuracy on vehicles traveling up to 120 km/h.",
    "applications": [
      "National Highway Fastag Electronic Toll Collection (ETC) Lanes",
      "Automated Warehouse Pallet Tracking and Portal Scanning Gantry",
      "Smart Parking Lot Boom Barrier Access Control",
      "Garment and Asset Inventory Tracking in Industrial Plants"
    ],
    "installationGuide": "Mount overhead or side-facing at an angle of 30\u00b0 to 45\u00b0 toward approaching vehicles. Ensure clear line of sight to RFID transponder tags without metal obstruction.",
    "faqs": [
      {
        "q": "Why is circular polarization mandatory for Fastag tolling?",
        "a": "Circular polarization ensures that tags oriented vertically, horizontally, or tilted on vehicle windshields are read with identical RF sensitivity."
      },
      {
        "q": "What is the maximum read range achievable with a 9 dBi panel?",
        "a": "When paired with a standard 1W (30 dBm) RFID reader, our 9 dBi panel achieves reliable read distances of 8 to 12 meters on passive EPC Gen 2 tags."
      }
    ]
  },
  "rf-cavity-duplexers": {
    "title": "High-Q RF Cavity Duplexers",
    "standards": "Engineered and precision-tuned to Anand Technologies Bengaluru standards. Utilizes high-Q silver-plated quarter-wave coaxial cavities with Invar temperature compensation rods to maintain resonance stability across temperature swings.",
    "electricalSpecs": {
      "Frequency Range": "136 - 174 MHz (VHF) / 380 - 520 MHz (UHF)",
      "TX / RX Frequency Separation": "\u2265 600 kHz (VHF) / \u2265 3.5 MHz to 5 MHz (UHF)",
      "TX to RX Isolation": "\u2265 80 dB (\u2265 85 dB typical across notch frequencies)",
      "Insertion Loss": "\u2264 1.2 dB (TX to ANT and RX to ANT ports)",
      "VSWR": "\u2264 1.25:1 (50 Ohms matched on all three ports)",
      "Power Handling Capacity": "50 Watts / 100 Watts / 250 Watts continuous RF power",
      "Nominal Impedance": "50 Ohms",
      "Cavity Configuration": "6-Cavity Band-Reject (Notch) coaxial resonator assembly",
      "Port Termination": "N-Female connectors with silver-plated center pins"
    },
    "mechanicalSpecs": {
      "Chassis Metallurgy": "High-grade extruded aluminum alloy with alodine corrosion treatment",
      "Cavity Resonator Material": "Extruded copper resonator tubes with electrolytic silver plating",
      "Temperature Compensation": "Invar tuning rods eliminating thermal drift across -30\u00b0C to +60\u00b0C",
      "Form Factor": "Standard 19-inch 2U or 3U rack-mount chassis configuration",
      "Overall Dimensions": "483 mm (Width) x 88 mm (Height) x 420 mm (Depth)",
      "Total Assembly Weight": "8.5 kg to 14.0 kg depending on power and frequency band"
    },
    "calibration": "Each duplexer is aligned and calibrated by hand on our multi-port Vector Network Analyzers. Both transmit notch rejection and receive passband insertion loss are optimized to 0.1 dB precision before locking the mechanical tuning assemblies.",
    "applications": [
      "Full-Duplex Radio Repeater Base Stations operating on single antennas",
      "Emergency Response and Disaster Relief Mobile Command Trailers",
      "Police and Paramilitary Multi-Channel Radio Base Installations",
      "Industrial Campus Radio Networks requiring co-located repeater operation"
    ],
    "installationGuide": "Mount in a standard 19-inch equipment rack directly adjacent to the repeater unit. Connect the repeater TX port to the duplexer High (or Low) port, the RX port to the opposing port, and the antenna feeder cable to the common ANT port using calibrated, double-shielded RG-214 or LMR-400 jumper cables. Never attempt field tuning without a calibrated VNA.",
    "faqs": [
      {
        "q": "Can CoreForge tune the duplexer to our exact TX and RX frequencies prior to shipping?",
        "a": "Yes. Every duplexer is factory-tuned to your exact specified transmit and receive frequencies at our Peenya workshop and ships with a laminated VNA plot confirming isolation and insertion loss."
      },
      {
        "q": "What happens if our TX and RX frequency split is narrower than standard specifications?",
        "a": "Narrow frequency splits require higher cavity Q factors or 8-cavity architectures. Contact our RF engineering team with your exact frequency pairs for custom filter profiling."
      },
      {
        "q": "Can the duplexer handle continuous digital transmissions (DMR / P25)?",
        "a": "Yes. Our duplexers are rated for 100% duty cycle continuous wave (CW) transmission, making them fully compliant with continuous DMR, P25, and analogue FM operation."
      },
      {
        "q": "Why does a repeater need a cavity duplexer instead of two separate antennas?",
        "a": "Using two antennas requires physical vertical separation of over 10 meters on the tower to achieve 80 dB isolation, which is often structurally impossible. A cavity duplexer achieves this isolation inside a compact 19-inch rack unit using a single antenna."
      },
      {
        "q": "How temperature-stable are these cavity duplexers in unconditioned shelters?",
        "a": "By incorporating Invar tuning rods with near-zero thermal expansion coefficients, frequency drift is kept below 1.5 ppm across the entire -30\u00b0C to +60\u00b0C temperature range."
      }
    ]
  },
  "rf-directional-couplers": {
    "title": "Directional Couplers & Power Taps",
    "standards": "Manufactured to Anand Technologies low-PIM passive standards. Features air-dielectric stripline construction for ultra-low insertion loss and maximum directivity.",
    "electricalSpecs": {
      "Frequency Range": "698 - 2700 MHz / 380 - 3800 MHz (Wideband 5G)",
      "Coupling Values Available": "5 dB, 6 dB, 7 dB, 10 dB, 15 dB, 20 dB, 30 dB",
      "Coupling Flatness": "\u00b1 0.5 dB across frequency band",
      "Directivity": "\u2265 20 dB (\u2265 23 dB typical)",
      "Mainline Insertion Loss": "< 0.2 dB to 1.6 dB depending on coupling factor",
      "VSWR": "\u2264 1.20:1 on all ports",
      "Power Handling": "200 Watts / 300 Watts average CW power",
      "PIM Rating": "\u2264 -155 dBc @ 2 x 43 dBm (Low-PIM DAS compliant)",
      "Impedance": "50 Ohms",
      "Connectors": "N-Female with tri-alloy plating"
    },
    "mechanicalSpecs": {
      "Housing Metallurgy": "Milled aluminum casing with alodine protective finish",
      "Waterproofing": "IP65 indoor/outdoor rated with sealed connector ports",
      "Operating Temperature": "-35\u00b0C to +75\u00b0C",
      "Mounting": "Dual screw-hole bracket mounting",
      "Dimensions": "145 mm x 60 mm x 28 mm",
      "Weight": "380 grams"
    },
    "calibration": "Benchmarked for low Passive Intermodulation (PIM) and precise directional power sampling on automated test stations.",
    "applications": [
      "Distributed Antenna Systems (DAS) in commercial high-rises and airports",
      "Transmitter Forward and Reflected Power Sampling and Telemetry",
      "Cellular Base Station Signal Distribution and Power Balancing",
      "RF Power Meter Monitoring and Automatic Gain Control (AGC) loops"
    ],
    "installationGuide": "Mount inline on the main coaxial transmission feed. Connect signal source to INPUT, primary antenna feed to OUTPUT, and measurement receiver to the COUPLED port. Terminate any unused coupled ports with calibrated 50-Ohm dummy loads.",
    "faqs": [
      {
        "q": "What is the difference between a directional coupler and a power splitter?",
        "a": "A power splitter divides power equally (e.g. 50/50); a directional coupler extracts a small calibrated fraction of power (e.g. -20 dB or 1%) while passing the remaining 99% with minimal loss."
      },
      {
        "q": "Why is Passive Intermodulation (PIM) critical in directional couplers?",
        "a": "Poor PIM generates non-linear intermodulation distortion that falls into cellular receive bands, creating permanent background noise that drops mobile call capacity."
      }
    ]
  },
  "rf-power-splitters": {
    "title": "Power Splitters & Combiners",
    "standards": "Manufactured to Anand Technologies microstrip and Wilkinson divider standards. Offers high isolation between output ports and low insertion loss across UHF and cellular bands.",
    "electricalSpecs": {
      "Frequency Range": "698 - 2700 MHz (2-way, 3-way, and 4-way models)",
      "Insertion Loss": "\u2264 3.2 dB (2-Way) / \u2264 5.2 dB (3-Way) / \u2264 6.4 dB (4-Way)",
      "Split Loss": "3.0 dB (2-Way) / 4.77 dB (3-Way) / 6.0 dB (4-Way)",
      "Isolation Between Ports": "\u2265 20 dB across operating band",
      "Amplitude Balance": "\u2264 0.2 dB",
      "Phase Balance": "\u2264 3\u00b0",
      "VSWR": "\u2264 1.25:1",
      "Power Handling": "50 Watts / 100 Watts average CW",
      "Connector Type": "N-Female (50 Ohm)"
    },
    "mechanicalSpecs": {
      "Chassis": "Compact milled aluminum enclosure with alodine finish",
      "Ingress Protection": "IP65 weather-resistant casing",
      "Dimensions": "110 mm x 75 mm x 22 mm (2-Way)",
      "Weight": "260 grams"
    },
    "calibration": "Tuned using precision Wilkinson thin-film balance resistors to ensure high port-to-port isolation and zero reflected inter-carrier distortion.",
    "applications": [
      "In-building DAS cellular coverage antenna splitting",
      "Multi-antenna phased array feed systems",
      "RF signal distribution in laboratory test setups",
      "Coaxial transmitter power splitting across dual repeaters"
    ],
    "installationGuide": "Secure to equipment backplanes using M4 mounting screws. Connect primary feeder to input port and branch cables to output ports. Ensure equal cable lengths on output ports when feeding antenna arrays to maintain phase coherence.",
    "faqs": [
      {
        "q": "Can a power splitter be used in reverse as a power combiner?",
        "a": "Yes. Wilkinson power splitters are reciprocal passive devices and function as power combiners, provided input signals are frequency-separated and power ratings are respected."
      },
      {
        "q": "What happens if one output port is left unconnected?",
        "a": "Leaving an output port open creates an impedance mismatch that degrades isolation and increases VSWR. Always terminate unused ports with 50-Ohm dummy loads."
      }
    ]
  },
  "rf-coaxial-attenuators": {
    "title": "RF Coaxial Fixed Attenuators",
    "standards": "Engineered to Anand Technologies precision power dissipation benchmarks. Features ceramic thin-film resistor substrates with thick aluminum cooling fins.",
    "electricalSpecs": {
      "Frequency Range": "DC - 3 GHz / DC - 6 GHz",
      "Attenuation Values": "3 dB, 6 dB, 10 dB, 20 dB, 30 dB, 40 dB",
      "Attenuation Accuracy": "\u00b1 0.3 dB (up to 20 dB) / \u00b1 0.5 dB (30 - 40 dB)",
      "VSWR": "\u2264 1.20:1 across DC - 3 GHz",
      "Impedance": "50 Ohms",
      "Power Handling": "25 Watts / 50 Watts / 100 Watts / 200 Watts continuous CW",
      "Peak Power Rating": "5 kW (5\u00b5s pulse width, 0.5% duty cycle)",
      "Connector Types": "N-Male to N-Female bidirectional"
    },
    "mechanicalSpecs": {
      "Heat Sink Metallurgy": "Black anodized extruded aluminum radial heat sink fins",
      "Connector Bodies": "Tri-alloy plated brass with gold-plated beryllium copper contacts",
      "Operating Temperature": "-55\u00b0C to +125\u00b0C",
      "Dimensions": "Length: 140 mm / Diameter: 60 mm (100W model)",
      "Weight": "650 grams"
    },
    "calibration": "Calibrated across DC to 3000 MHz on Vector Network Analyzers, verifying flat attenuation response and zero frequency-dependent power compression.",
    "applications": [
      "Protecting sensitive spectrum analyzers and power meters during high-power transmitter testing",
      "Inter-stage level matching between RF power amplifiers and mixers",
      "Receiver front-end desensitization prevention in strong signal environments",
      "Simulating cable attenuation loss in laboratory testing environments"
    ],
    "installationGuide": "Install inline between transmitter output and test instrumentation. Ensure adequate natural convection airflow around cooling fins when operating near rated continuous RF power.",
    "faqs": [
      {
        "q": "Are CoreForge attenuators bidirectional?",
        "a": "Yes. Symmetrical thin-film design allows RF power to be injected into either port with identical attenuation and VSWR characteristics."
      },
      {
        "q": "How hot can the attenuator get during continuous high-power testing?",
        "a": "Under full 100W continuous transmission, heat sink temperatures can reach 70\u00b0C to 80\u00b0C. This is completely within normal operating limits for the ceramic substrate."
      }
    ]
  },
  "rf-bandpass-filters": {
    "title": "Cavity Band Pass Filters",
    "standards": "Manufactured to Anand Technologies steep-skirt cavity filter standards. Utilizes high-Q silver-plated coaxial cavities to suppress co-located transmitter interference and spurious harmonics.",
    "electricalSpecs": {
      "Passband Frequency": "Factory tuned to VHF, UHF, or ISM bands (e.g. 140-150 MHz, 430-440 MHz, 865-867 MHz)",
      "Passband Insertion Loss": "\u2264 0.8 dB at center frequency",
      "VSWR in Passband": "\u2264 1.25:1",
      "Out-of-Band Rejection": "\u2265 40 dB at \u00b1 5% frequency offset / \u2265 70 dB at \u00b1 10% offset",
      "Power Handling": "100 Watts / 250 Watts continuous RF power",
      "Impedance": "50 Ohms",
      "Resonator Type": "4-Cavity / 6-Cavity coaxial helical resonators",
      "Connectors": "N-Female silver-plated"
    },
    "mechanicalSpecs": {
      "Housing": "Extruded aluminum with electrolytic alodine treatment",
      "Tuning Elements": "Silver-plated brass screws with positive lock nuts",
      "Operating Temperature": "-30\u00b0C to +60\u00b0C",
      "Dimensions": "280 mm x 180 mm x 85 mm",
      "Weight": "3.8 kg"
    },
    "calibration": "Alignments performed on Rohde & Schwarz VNAs, providing sharp skirt selectivity and maximum out-of-band rejection plots with every filter unit.",
    "applications": [
      "Eliminating intermodulation interference on co-located communications towers",
      "Clean harmonic suppression on commercial transmitter outputs",
      "Receiver front-end protection against high-power broadcast stations",
      "SCADA and telemetry telemetry frequency isolation"
    ],
    "installationGuide": "Mount inline on the receiver or transmitter feedline. Secure in equipment racks using supplied brackets. Protect tuning lock-nuts from accidental adjustment.",
    "faqs": [
      {
        "q": "Can you design custom passband widths for specialized communications?",
        "a": "Yes. Our Peenya filter workshop customizes cavity Q factors, coupling loops, and cavity counts to achieve custom passband bandwidths from 200 kHz up to 20 MHz."
      },
      {
        "q": "How much does a bandpass filter improve receiver performance on busy towers?",
        "a": "On shared towers with high ambient RF noise, a high-Q bandpass filter eliminates out-of-band overload, effectively restoring 10 dB to 15 dB of receiver sensitivity."
      }
    ]
  },
  "rf-coaxial-cable-assemblies": {
    "title": "Low-Loss RF Coaxial Cable Assemblies",
    "standards": "Manufactured to Anand Technologies cable fabrication benchmarks. Features low-loss foam polyethylene dielectrics with double-shielding and precision crimped connectors.",
    "electricalSpecs": {
      "Cable Types Available": "LMR-400, LMR-200, RG-214, RG-213, RG-58",
      "Impedance": "50 Ohms \u00b1 1 Ohm",
      "Velocity of Propagation": "85% (LMR-400 gas-injected foam dielectric)",
      "Attenuation Loss (LMR-400)": "3.9 dB / 100 ft (12.8 dB / 100m) @ 900 MHz / 6.6 dB / 100 ft @ 2400 MHz",
      "Shielding Effectiveness": "\u2265 90 dB (bonded aluminum foil + 95% tinned copper braid)",
      "Capacitance": "23.9 pF/ft (78.4 pF/m)",
      "Max Operating Voltage": "2500 Volts DC",
      "Operating Frequency": "DC to 6 GHz"
    },
    "mechanicalSpecs": {
      "Outer Jacket Material": "UV-resistant, weather-proof black polyethylene (PE)",
      "Minimum Bend Radius": "25.4 mm (installation) / 101.6 mm (repeated)",
      "Operating Temperature": "-40\u00b0C to +85\u00b0C",
      "Connectors Available": "N-Male, N-Female, BNC-Male, TNC, SMA-Male, UHF (PL-259)",
      "Termination Standard": "Hex-crimp outer ferrule with soldered or captive gold-plated center pin",
      "Strain Relief": "Dual-wall adhesive-lined heat shrink tubing at connector junctions"
    },
    "calibration": "100% of cable assemblies are tested on VNAs for S11 Return Loss (\u2264 -20 dB up to 3 GHz) and end-to-end insertion loss verification before shipping.",
    "applications": [
      "Main Antenna Feeder Runs on communication masts and towers",
      "Repeater Cabinet Interconnects and Duplexer Jumpers",
      "Cellular Base Station Jumper Cables (N-Type to DIN)",
      "Laboratory Test Cables with high phase stability"
    ],
    "installationGuide": "Never exceed minimum bend radius during installation to prevent crushing the foam dielectric. When installing outdoors, seal connector junctions with self-amalgamating tape and mastic sealant. Support vertical cable runs every 1 meter with cable cleats.",
    "faqs": [
      {
        "q": "Why is LMR-400 superior to standard RG-8 or RG-213 cable?",
        "a": "LMR-400 uses a closed-cell gas-injected foam dielectric and bonded foil shield, delivering nearly half the signal attenuation of traditional solid-polyethylene RG-213 cables at UHF frequencies."
      },
      {
        "q": "Can CoreForge produce custom cable lengths with mixed connectors?",
        "a": "Yes. We assemble and test custom cable assemblies in our Peenya lab with any required connector combinations (e.g. N-Male to SMA-Male) and lengths from 0.5 meters to 100 meters."
      }
    ]
  },
  "rf-lightning-surge-arrestors": {
    "title": "RF Lightning & Surge Protectors",
    "standards": "Manufactured to Anand Technologies surge suppression standards. Complies with IEC 61643-21 and IEEE C62.41 surge protection benchmarks.",
    "electricalSpecs": {
      "Frequency Range": "DC - 3 GHz / DC - 6 GHz wideband",
      "Surge Discharge Current": "20 kA (8/20 \u00b5s lightning waveform rating)",
      "Breakdown Voltage": "90V / 230V / 350V gas discharge tube (GDT) options",
      "Insertion Loss": "\u2264 0.15 dB across DC - 3 GHz",
      "VSWR": "\u2264 1.15:1 across operational spectrum",
      "Impedance": "50 Ohms",
      "RF Power Capacity": "200 Watts CW (230V GDT installed)",
      "Connector Types": "N-Female to N-Female / N-Male to N-Female bulkhead",
      "Ground Connection": "M8 copper stud terminal with brass nut and lock washer"
    },
    "mechanicalSpecs": {
      "Chassis Metallurgy": "Nickel-plated brass body with silicone O-ring seals",
      "Ingress Protection": "IP67 waterproof bulkhead mounting",
      "Operating Temperature": "-40\u00b0C to +85\u00b0C",
      "Dimensions": "65 mm x 32 mm x 28 mm",
      "Weight": "135 grams"
    },
    "calibration": "Tested for fast nanosecond spark-over response time (<10 ns) and zero degradation in high-frequency Return Loss.",
    "applications": [
      "Equipment Shelter Bulkhead Entry Point Lightning Protection",
      "Cellular Tower Base Station Feeder Line Protection",
      "Outdoor Wi-Fi Access Point Antenna Feed Protection",
      "Marine Coastal Radio Lightning Grounding Systems"
    ],
    "installationGuide": "Install at the perimeter entry bulkhead of the equipment shelter before the coaxial cable connects to sensitive radio gear. Connect the M8 ground stud to the master grounding busbar using heavy-gauge copper strap (minimum 16mm\u00b2) with the shortest possible straight run.",
    "faqs": [
      {
        "q": "Is the gas discharge tube (GDT) replaceable after a lightning surge?",
        "a": "Yes. The protector features a knurled threaded cap that allows field replacement of the 90V or 230V gas discharge capsule in under 60 seconds without disconnecting the main cable."
      },
      {
        "q": "Does a surge arrestor prevent lightning from hitting the antenna?",
        "a": "No arrestor prevents a direct lightning strike. The arrestor shunts induced high-voltage transient spikes from nearby strikes safely into the earth ground busbar, protecting connected transmitters and receivers from catastrophic burnout."
      },
      {
        "q": "Can this arrestor pass DC power for active GPS antennas or tower-mounted amplifiers?",
        "a": "Yes. Our DC-Pass GDT models pass DC supply voltages up to 48V, making them fully compatible with active GPS pucks and remote masthead preamplifiers."
      }
    ]
  }
};
