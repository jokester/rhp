#!/usr/bin/env node
import os from 'node:os';

console.debug('rhp homepage processor');
console.debug('env', {
  arch: os.arch(),
});
