import { config } from 'dotenv';

config();

// Your Vite build command (replace with your actual command)
// You can use a tool like concurrently to run both the build script and Vite in parallel
import { spawn } from 'child_process';
spawn('vite build', { stdio: 'inherit' });