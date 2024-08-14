// -*- coding: utf-8, tab-width: 2 -*-
/* eslint-disable object-property-newline */

import eq from 'equal-pmb';

import identifyArtisanalInteger from '../index.js';

eq.err(() => identifyArtisanalInteger(9e23), / too large /);
eq(identifyArtisanalInteger(-10), false);
eq(identifyArtisanalInteger('-10'), false);
eq(identifyArtisanalInteger(0), false);
eq(identifyArtisanalInteger(3.1415), false);
eq(identifyArtisanalInteger(''), false);

eq(identifyArtisanalInteger(1), 'Brooklyn');
eq(identifyArtisanalInteger(2), 'Mission');
eq(identifyArtisanalInteger(9), 'Brooklyn');
eq(identifyArtisanalInteger(18), 'Mission');
eq(identifyArtisanalInteger(37112883), 'Brooklyn');
eq(identifyArtisanalInteger(37112884), 'Mission');
eq(identifyArtisanalInteger(37112885), 'Brooklyn');
eq(identifyArtisanalInteger(37112886), 'London');
eq(identifyArtisanalInteger(37112887), 'Brooklyn');
eq(identifyArtisanalInteger(37112888), 'Mission');

eq(identifyArtisanalInteger('1'), 'Brooklyn');
eq(identifyArtisanalInteger('2'), 'Mission');
eq(identifyArtisanalInteger('9'), 'Brooklyn');
eq(identifyArtisanalInteger('18'), 'Mission');
eq(identifyArtisanalInteger('37112883'), 'Brooklyn');
eq(identifyArtisanalInteger('37112884'), 'Mission');
eq(identifyArtisanalInteger('37112885'), 'Brooklyn');
eq(identifyArtisanalInteger('37112886'), 'London');
eq(identifyArtisanalInteger('37112887'), 'Brooklyn');
eq(identifyArtisanalInteger('37112888'), 'Mission');

eq.err(() => identifyArtisanalInteger(12345678901234567000), / too large /);
// ^- The JS integer closest to 12345678901234567890.
eq(identifyArtisanalInteger('12345678901234567890'), 'London');
// ^- Must be divisible by 9 via sum of digits because all digits can be
//    paired to form sums of 9 (1+8, 2+7, …, 9+0).
eq(identifyArtisanalInteger('12345678901234567891'), 'Brooklyn');
eq(identifyArtisanalInteger('12345678901234567892'), 'Mission');
eq(identifyArtisanalInteger('12345678901234567893'), 'Brooklyn');
eq(identifyArtisanalInteger('12345678901234567894'), 'Mission');
eq(identifyArtisanalInteger('12345678901234567895'), 'Brooklyn');
eq(identifyArtisanalInteger('12345678901234567896'), 'Mission');
eq(identifyArtisanalInteger('12345678901234567897'), 'Brooklyn');
eq(identifyArtisanalInteger('12345678901234567898'), 'Mission');
eq(identifyArtisanalInteger('12345678901234567899'), 'London');


// "Realistic" tests with integers actually "crafted" especially for this test:
eq(identifyArtisanalInteger(1930724745), 'Brooklyn');
eq(identifyArtisanalInteger(40278087), 'London');

// MI no longer works, but I can use the example from the screenshot in their
// GitHub: https://github.com/aaronland/missionintegers-www
// (Memento: http://web.archive.org/web/20201102032101/…)
eq(identifyArtisanalInteger(1159344516), 'Mission');













console.info('+OK usage test passed.');
