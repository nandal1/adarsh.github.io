# OctoNyte  
## CPU Designer | COMP-699-F.SP25

This repository contains my work for the Professional Seminar course (COMP-699-F.SP25).

As a **CPU Designer**, I developed and parameterized execution units for a 32-bit RISC-V processor core using Chisel, ensuring compliance with the RV32I specification and future extensibility.

## Project Focus
- **Designed parameterized execution units** to allow flexible configurations (e.g., pipeline depth, optional features) for a scalable 32-bit RISC-V processor.
- **Implemented modular execution units**:
  - Arithmetic Logic Unit (ALU)
  - Load Unit
  - Store Unit
  - Branch Unit
  - Multiplier (future extension support)
- **Ensured RISC-V 32-bit compliance** and verified that the generated Verilog was synthesizable, meeting timing and performance requirements.
- **Integrated units into a pipelined architecture** with a program counter and multithreaded register file.
- **Developed and validated Chisel-based designs**, ensuring robust functionality through directed and edge-case testing in a system-level simulation environment.
- **Documented architecture** and parameter usage for reuse in future CPU designs and SoC integration.

## Tasks Completed
- **Sprint 1**: ALU Design and Parameterization  
- **Sprint 2**: Load Unit Design and Verification  
- **Sprint 3**: Store Unit and Data Alignment Implementation  
- **Sprint 4**: Branch Unit Design and Pipeline Integration  

Each sprint involved:
- Creating parameterized Chisel modules and integrating them into the pipeline.
- Documenting integration steps and parameter usage for future reuse.
