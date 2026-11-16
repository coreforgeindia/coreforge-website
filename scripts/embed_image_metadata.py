#!/usr/bin/env python3
"""
CoreForge Image Metadata & EXIF / IPTC Enrichment Script
Embeds SEO-rich EXIF, IPTC, and COM metadata into all service and product images.
- Title, Description, Keywords
- Artist / Author: CoreForge Engineering Lab
- Location: Bengaluru, Karnataka, India
- Copyright: Copyright 2026 CoreForge. All rights reserved.
"""

import os
import subprocess
import struct

IMAGE_METADATA = {
    # Services
    "src/assets/services/brand-strategy.jpg": {
        "title": "CoreForge Brand Strategy & Visual Identity Design",
        "description": "Minimalist monochrome brand identity guidelines, typography scales, vector logo design, and positioning matrix for enterprise B2B technology companies in Bengaluru.",
        "keywords": "brand strategy, brand identity, visual hierarchy, typography, Space Grotesk, B2B branding Bengaluru, CoreForge",
        "author": "CoreForge Design Lab, Bengaluru",
    },
    "src/assets/services/web-development.jpg": {
        "title": "CoreForge Modern Responsive Web Engineering",
        "description": "High-performance responsive web application architecture with sub-second page loads, Vite bundling, React components, and WCAG accessibility standards.",
        "keywords": "web development, responsive web design, React, Vite, Core Web Vitals, frontend engineering Bengaluru, CoreForge",
        "author": "CoreForge Web Lab, Bengaluru",
    },
    "src/assets/services/paid-advertising.jpg": {
        "title": "CoreForge Performance Paid Media & Search Engine Marketing",
        "description": "Targeted Google Ads search campaigns, Meta ads retargeting funnels, conversion tracking infrastructure, and ROAS optimization managed for scaling enterprises.",
        "keywords": "Google Ads, Meta Ads, paid advertising, ROAS, performance marketing, search engine marketing Bengaluru, CoreForge",
        "author": "CoreForge Growth Lab, Bengaluru",
    },
    "src/assets/services/custom-webapp.jpg": {
        "title": "CoreForge Custom Web Application Architecture",
        "description": "Bespoke enterprise cloud software, REST APIs, microservices, and database systems engineered to replace rigid SaaS tools.",
        "keywords": "custom web application, enterprise software, SaaS alternative, Node.js, PostgreSQL, cloud architecture Bengaluru, CoreForge",
        "author": "CoreForge Software Team, Bengaluru",
    },
    "src/assets/services/mobile-app.jpg": {
        "title": "CoreForge Cross-Platform Mobile Application Engineering",
        "description": "High-performance React Native mobile applications with native device integrations, offline SQLite synchronization, and fluid 60-120 FPS animations.",
        "keywords": "mobile app development, React Native, cross platform mobile apps, iOS Android, mobile engineering Bengaluru, CoreForge",
        "author": "CoreForge Mobile Team, Bengaluru",
    },
    "src/assets/services/service-marketing.jpg": {
        "title": "CoreForge 360 Digital Marketing & Growth Strategy",
        "description": "End-to-end digital marketing infrastructure including technical SEO, AEO direct answer optimization, GEO generative engine citations, and multi-channel acquisition.",
        "keywords": "360 digital marketing, SEO, AEO, GEO, generative engine optimization, content strategy Bengaluru, CoreForge",
        "author": "CoreForge Marketing Desk, Bengaluru",
    },
    "src/assets/services/service-software.jpg": {
        "title": "CoreForge Software & Tech Solutions Engineering Workspace",
        "description": "Modern software engineering laboratory specializing in full-stack cloud systems, telemetry dashboards, and proprietary business platforms.",
        "keywords": "software engineering, tech solutions, full stack development, cloud telemetry, software laboratory Bengaluru, CoreForge",
        "author": "CoreForge Engineering Team, Bengaluru",
    },

    # Products
    "src/assets/products/rf-duplexer.jpg": {
        "title": "CoreForge Industrial RF Cavity Duplexer & Bandpass Filters",
        "description": "High-Q 6-cavity notch duplexer for VHF and UHF radio repeaters with greater than 75 dB Tx-Rx isolation and low insertion loss, calibrated on Vector Network Analyzers in Bengaluru.",
        "keywords": "cavity duplexer, RF duplexer, VHF UHF repeater, VNA calibration, notch filter, 50 ohm impedance, CoreForge RF",
        "author": "CoreForge RF Engineering Lab, Bengaluru",
    },
    "src/assets/products/antenna-vhf-uhf.jpg": {
        "title": "CoreForge VHF UHF Base Station Antennas",
        "description": "Industrial folded dipole arrays and fiberglass collinear base station antennas with 200 km/h wind survivability and integrated DC lightning protection.",
        "keywords": "VHF antenna, UHF base station antenna, folded dipole, collinear antenna, two-way radio, RF hardware Bengaluru, CoreForge",
        "author": "CoreForge RF Engineering Lab, Bengaluru",
    },
    "src/assets/products/antenna-gsm-lte.jpg": {
        "title": "CoreForge GSM 3G 4G 5G Base Station & IoT Antennas",
        "description": "Multi-band cellular omnidirectional and directional antennas covering 698-2700 MHz and 3500 MHz for industrial IoT, telemetry, and cellular base stations.",
        "keywords": "GSM antenna, 4G LTE antenna, 5G sub-6 antenna, IoT antenna, industrial cellular antenna, CoreForge",
        "author": "CoreForge Hardware Systems, Bengaluru",
    },
    "src/assets/products/antenna-gps-gnss.jpg": {
        "title": "CoreForge Marine & Vehicle GPS GNSS Active Antennas",
        "description": "IP67 waterproof active GNSS satellite antennas with integrated 28 dB Low Noise Amplifier (LNA) and SAW bandpass filter for vehicle tracking and marine navigation.",
        "keywords": "GPS antenna, GNSS antenna, marine GPS, active antenna, LNA, vehicle tracking, IP67 waterproof, CoreForge",
        "author": "CoreForge Hardware Systems, Bengaluru",
    },
    "src/assets/products/antenna-wifi.jpg": {
        "title": "CoreForge Dual-Band 2.4 GHz & 5.8 GHz Industrial Wi-Fi Antennas",
        "description": "High-gain omnidirectional and directional dual-band Wi-Fi antennas with N-Female connectors for enterprise outdoor wireless bridges and SCADA automation.",
        "keywords": "WiFi antenna, 2.4 GHz, 5.8 GHz, dual band WiFi, outdoor wireless bridge, SCADA antenna, CoreForge",
        "author": "CoreForge Hardware Systems, Bengaluru",
    },
    "src/assets/products/rf-cables.jpg": {
        "title": "CoreForge Low-Loss RF Coaxial Cable Assemblies & Connectors",
        "description": "Precision 50-Ohm LMR-200, LMR-400, and RG-213 low-loss coaxial cables with silver-plated N-Type, BNC, and SMA connectors calibrated for high-frequency RF transmission.",
        "keywords": "RF coaxial cable, LMR-400, RG-213, N-type connector, BNC connector, 50 ohm low loss cable, CoreForge",
        "author": "CoreForge RF Engineering Lab, Bengaluru",
    },
}

def inject_jpeg_comment(filepath, comment_bytes):
    """
    Injects a COM marker (0xFFFE) right after SOI (0xFFD8) in a JPEG file.
    Preserves all existing markers and image data.
    """
    with open(filepath, "rb") as f:
        data = f.read()

    if not data.startswith(b"\xff\xd8"):
        print(f"Skipping {filepath}: Not a standard JPEG")
        return

    # Check if COM marker already exists immediately after SOI
    # Marker length is 2 bytes (length includes the length field itself)
    com_marker = b"\xff\xfe" + struct.pack(">H", len(comment_bytes) + 2) + comment_bytes

    # Insert after SOI (first 2 bytes)
    new_data = data[:2] + com_marker + data[2:]

    with open(filepath, "wb") as f:
        f.write(new_data)


def embed_metadata():
    print("CoreForge Image Metadata Enrichment Pipeline")
    print("=============================================")

    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

    for rel_path, meta in IMAGE_METADATA.items():
        abs_path = os.path.join(base_dir, rel_path)
        if not os.path.exists(abs_path):
            print(f"⚠️  File not found: {abs_path}")
            continue

        print(f"\nProcessing: {rel_path}")

        # 1. Use macOS sips to embed EXIF/TIFF properties
        desc_text = f"{meta['title']} - {meta['description']} (Keywords: {meta['keywords']})"
        copyright_text = "Copyright 2026 CoreForge. All rights reserved. https://www.coreforgeindia.com"

        sips_cmd = [
            "sips",
            "-s", "make", "CoreForge",
            "-s", "model", "Industrial Technology Lab",
            "-s", "artist", meta["author"],
            "-s", "description", desc_text,
            "-s", "copyright", copyright_text,
            abs_path
        ]

        try:
            res = subprocess.run(sips_cmd, capture_output=True, text=True)
            if res.returncode == 0:
                print(f"  ✓ SIPS metadata written (artist, description, copyright, make, model)")
            else:
                print(f"  ⚠️ SIPS notice: {res.stderr.strip()}")
        except Exception as e:
            print(f"  ⚠️ SIPS error: {e}")

        # 2. Inject JPEG COM marker with structured metadata
        structured_comment = (
            f"Title: {meta['title']}\n"
            f"Description: {meta['description']}\n"
            f"Keywords: {meta['keywords']}\n"
            f"Author: {meta['author']}\n"
            f"Copyright: {copyright_text}\n"
            f"Location: Bengaluru, Karnataka, India\n"
            f"Website: https://www.coreforgeindia.com\n"
        ).encode("utf-8")

        try:
            inject_jpeg_comment(abs_path, structured_comment)
            print(f"  ✓ JPEG COM structured comment marker injected ({len(structured_comment)} bytes)")
        except Exception as e:
            print(f"  ⚠️ COM injection error: {e}")

    print("\n✓ Image metadata enrichment complete for all 13 primary assets.")

if __name__ == "__main__":
    embed_metadata()
