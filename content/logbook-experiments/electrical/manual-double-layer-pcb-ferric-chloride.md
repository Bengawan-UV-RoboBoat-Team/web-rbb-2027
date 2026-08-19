---
title: "[EXPERIMENT] Manual Double-Layer PCB Fabrication Using Acetone Transfer and Ferric Chloride Etching"
date: "8 January 2026"
author: "M. Faridz"
description: "Documentation of a low-cost manual process for fabricating double-layer PCBs using inkjet acetone transfer and ferric chloride etching for prototyping and laboratory use."
image: "/images/research/electric-mechanic/pcb.webp"
tags: ["PCB Fabrication", "Double-Layer PCB", "Electronics Prototyping", "Chemical Etching"]
---

---

# Manual Fabrication of Double-Layer PCB Using Acetone Transfer and Ferric Chloride Etching

## 1. Introduction
Double-layer Printed Circuit Boards (PCBs) provide copper routing on both sides of the substrate, enabling more compact layouts and higher circuit complexity. In laboratory-scale development, research, and educational environments, double-layer PCBs can be fabricated manually using chemical etching methods.

This document describes a manual PCB fabrication process using ferric chloride (FeCl₃) as the etchant. The copper trace pattern is printed on A4 paper using an inkjet printer and transferred onto the PCB surface using acetone. The acetone dissolves the ink, allowing it to adhere to the copper surface and function as an etching resist.

---

## 2. Tools and Materials

### Tools
- Double-layer blank PCB  
- Inkjet printer  
- A4 paper  
- Cotton or tissue  
- Permanent waterproof marker  
- Plastic container  
- PCB drill and micro drill bits  
- Safety gloves and mask  

### Materials
- Acetone  
- Ferric chloride (FeCl₃) solution  
- Clean water  
- Alcohol or thinner  

---

## 3. PCB Preparation

### 3.1 Copper Surface Cleaning
Both sides of the PCB copper are lightly sanded until shiny, then cleaned using alcohol to remove grease, oxidation, and dust. Proper surface preparation is critical to ensure strong ink adhesion during the transfer process.

### 3.2 Circuit Layout Printing
The PCB layout is designed using EDA software and printed onto A4 paper using an inkjet printer with high-quality print settings to maximize ink density.

### 3.3 Double-Layer Alignment
Top and bottom layer prints are manually aligned. Reference holes may be used to ensure accurate registration between both layers.

---

## 4. Trace Transfer Using Acetone

Unlike toner transfer methods, this process relies on acetone-assisted ink transfer. The procedure is as follows:

1. The printed A4 paper is placed onto the PCB with the ink facing the copper surface.  
2. The paper is held firmly to prevent movement during transfer.  
3. Cotton or tissue soaked in acetone is gently pressed and rubbed over the paper surface.  
4. Acetone dissolves the inkjet ink, allowing the trace pattern to transfer and adhere to the copper layer.  
5. The paper is carefully removed after transfer is complete.  
6. Incomplete or broken traces are corrected using a permanent waterproof marker.

The transferred ink acts as an etching resist, protecting the copper traces during chemical etching.

---

## 5. Ferric Chloride Etching Process

### 5.1 Etchant Preparation
Ferric chloride solution is poured into a plastic container. Metal containers must be avoided due to the corrosive nature of FeCl₃.

### 5.2 Etching Procedure
The PCB is immersed in the ferric chloride solution and gently agitated. Exposed copper areas dissolve gradually, while ink-protected traces remain intact.

### 5.3 Process Monitoring
Etching typically takes 15–30 minutes, depending on solution concentration and copper thickness.

### 5.4 Rinsing
Once unwanted copper is fully removed, the PCB is rinsed thoroughly with clean water to stop the chemical reaction.

---

## 6. PCB Finishing

### 6.1 Ink Removal
The remaining ink resist is removed using alcohol or thinner until clean copper traces are visible.

### 6.2 Drilling
Component holes and vias are drilled using appropriate micro drill bits.

### 6.3 Electrical Inspection
Continuity and isolation tests are performed using a multimeter to verify correct connectivity and absence of short circuits.

---

## 7. Advantages and Limitations

### Advantages
- Does not require a laser printer  
- Low-cost and accessible materials  
- Suitable for prototyping and educational use  

### Limitations
- Transfer quality depends on inkjet ink composition  
- Fine-pitch traces require high precision  
- Double-layer alignment is manual and sensitive to error  

---

## 8. Conclusion
Manual fabrication of double-layer PCBs using inkjet-acetone transfer and ferric chloride etching provides a practical solution for prototyping and laboratory experimentation. With proper preparation and controlled processing, reliable and functional PCBs can be produced.