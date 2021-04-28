/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Primary namespace for ResonanceAudio library.
 * @author Andrew Allen <bitllama@google.com>
 */

 'use strict';

import ResonanceAudio from './resonance-audio.js';

// Gives tests access to ResonanceAudio
window.ResonanceAudio = ResonanceAudio

import Attenuation from './attenuation.js';
import Directivity from './directivity.js';
import EarlyReflections from './early-reflections.js';
import Encoder from './encoder.js';
import LateReflections from './late-reflections.js';
import Listener from './listener.js';
import Room from './room.js';
import Source from './source.js';
import Tables from './tables.js';
import Utils from './utils.js';
import Version from './version.js';

// Testable Submodules.
ResonanceAudio.Attenuation = Attenuation
ResonanceAudio.Directivity = Directivity
ResonanceAudio.EarlyReflections = EarlyReflections
ResonanceAudio.Encoder = Encoder
ResonanceAudio.LateReflections = LateReflections
ResonanceAudio.Listener = Listener
ResonanceAudio.Room = Room
ResonanceAudio.Source = Source
ResonanceAudio.Tables = Tables
ResonanceAudio.Utils = Utils
ResonanceAudio.Version = Version

export default ResonanceAudio 