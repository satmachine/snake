

import * as THREE from 'three';

// Palette Definition
export interface Palette {
  name: string;
  colors: {
    SNAKE_HEAD: number;
    SNAKE_BODY: number;
    SNAKE_EMISSIVE: number;

    APPLE: number;
    APPLE_EMISSIVE: number;

    GROUND_BASE: number;

    OBSTACLE_DARK: number;  // Trees
    OBSTACLE_LIGHT: number; // Rocks
    CRYSTAL: number;
    GRASS: number;

    SKY_TOP: number;
    SKY_MID: number;
    SKY_BOTTOM: number;
    FOG: number;
    WATER: number;

    UI_ACCENT: number;
  };
  bloom: {
    strength: number;
    radius: number;
    threshold: number;
  };
  fog: {
    near: number;
    far: number;
  };
}

export const PALETTE_SPRING: Palette = {
  name: 'Spring',
  colors: {
    // 1. Pale Teal (Wash)
    // 2. Mint (Mid)
    // 3. Deep Teal (Base)
    // 4. Dark Evergreen (Silhouette)
    // 5. Stark White (Hero)
    // 6. Rose Pink (Accent)

    SNAKE_HEAD: 0xFFFFFF,      // Hero
    SNAKE_BODY: 0xE0F2F1,      // Wash
    SNAKE_EMISSIVE: 0xFFFFFF,

    APPLE: 0xFF80AB,           // Accent
    APPLE_EMISSIVE: 0xFF4081,

    GROUND_BASE: 0x4DB6AC,     // Base

    OBSTACLE_DARK: 0x004D40,   // Silhouette
    OBSTACLE_LIGHT: 0x80CBC4,  // Light variant of base
    CRYSTAL: 0xFF80AB,         // Accent
    GRASS: 0x00695C,           // Deep Teal

    SKY_TOP: 0x80CBC4,         // Darkened Teal
    SKY_MID: 0x4DB6AC,         // Medium Teal
    SKY_BOTTOM: 0x00695C,      // Deep Teal fade
    FOG: 0x4DB6AC,
    WATER: 0x00ACC1,

    UI_ACCENT: 0xFF80AB        // Accent
  },
  bloom: { strength: 0.4, radius: 0.8, threshold: 0.6 },
  fog: { near: 60, far: 380 }
};

export const PALETTE_SUMMER: Palette = {
  name: 'Summer',
  colors: {
    // 1. Pale Blush
    // 2. Warm Salmon
    // 3. Terra Cotta
    // 4. Deep Burgundy (Silhouette)
    // 5. White (Hero)
    // 6. Gold (Accent)

    SNAKE_HEAD: 0xFFFFFF,
    SNAKE_BODY: 0xFFEBEE,
    SNAKE_EMISSIVE: 0xFFFFFF,

    APPLE: 0xFFD740,          // Accent
    APPLE_EMISSIVE: 0xFFEA00,

    GROUND_BASE: 0xE57373,    // Base

    OBSTACLE_DARK: 0x880E4F,  // Silhouette
    OBSTACLE_LIGHT: 0xEF9A9A,
    CRYSTAL: 0xFFD740,
    GRASS: 0xC62828,

    SKY_TOP: 0xEF9A9A,        // Soft Red
    SKY_MID: 0xE57373,        // Salmon
    SKY_BOTTOM: 0xD32F2F,     // Base Dark
    FOG: 0xE57373,
    WATER: 0xC62828,

    UI_ACCENT: 0xFFD740
  },
  bloom: { strength: 0.5, radius: 0.9, threshold: 0.5 },
  fog: { near: 60, far: 380 }
};

export const PALETTE_AUTUMN: Palette = {
  name: 'Autumn',
  colors: {
    // 1. Cream
    // 2. Goldenrod
    // 3. Ochre
    // 4. Burnt Umber (Silhouette)
    // 5. White
    // 6. Royal Purple (Accent)

    SNAKE_HEAD: 0xFFFFFF,
    SNAKE_BODY: 0xFFF8E1,
    SNAKE_EMISSIVE: 0xFFFFFF,

    APPLE: 0x7C4DFF,           // Accent
    APPLE_EMISSIVE: 0xB388FF,

    GROUND_BASE: 0xFFB74D,     // Base

    OBSTACLE_DARK: 0x3E2723,   // Silhouette
    OBSTACLE_LIGHT: 0xFFCC80,
    CRYSTAL: 0x7C4DFF,
    GRASS: 0xE65100,

    SKY_TOP: 0xFFE082,         // Gold
    SKY_MID: 0xFFB74D,         // Orange
    SKY_BOTTOM: 0xF57F17,      // Deep Gold
    FOG: 0xFFB74D,
    WATER: 0xFB8C00,

    UI_ACCENT: 0x7C4DFF
  },
  bloom: { strength: 0.6, radius: 1.0, threshold: 0.4 },
  fog: { near: 60, far: 400 }
};

export const PALETTE_WINTER: Palette = {
  name: 'Winter',
  colors: {
    // 1. Ghost White
    // 2. Powder Blue
    // 3. Steel Blue
    // 4. Midnight Blue (Silhouette)
    // 5. White
    // 6. Warm Peach (Accent)

    SNAKE_HEAD: 0xFFFFFF,
    SNAKE_BODY: 0xE3F2FD,
    SNAKE_EMISSIVE: 0xFFFFFF,

    APPLE: 0xFFAB91,           // Accent
    APPLE_EMISSIVE: 0xFFCCBC,

    GROUND_BASE: 0x64B5F6,     // Base

    OBSTACLE_DARK: 0x0D47A1,   // Silhouette
    OBSTACLE_LIGHT: 0x90CAF9,
    CRYSTAL: 0xFFAB91,
    GRASS: 0x1565C0,

    SKY_TOP: 0x90CAF9,         // More Blue, less white
    SKY_MID: 0x64B5F6,
    SKY_BOTTOM: 0x1976D2,
    FOG: 0x90CAF9,
    WATER: 0x1E88E5,

    UI_ACCENT: 0xFFAB91
  },
  bloom: { strength: 0.3, radius: 0.6, threshold: 0.7 },
  fog: { near: 50, far: 350 }
};

export const CONFIG = {
  // Base configuration
  BASE_SNAKE_SPEED: 14.0,
  SNAKE_TURN_SPEED: 2.2,
  SNAKE_START_LENGTH: 5,
  SEGMENT_SPACING: 0.7,
  SEGMENT_RADIUS: 0.5,

  // Endless Progression
  SPEED_INCREMENT_PER_APPLE: 0.3,
  MAX_SPEED: 50.0,

  // Slope Physics & Gravity (Enhanced for Air Time)
  GRAVITY_ACCEL: 45.0,           // Speed gain/loss on slopes (increased from 30.0)
  PHYSICS_GRAVITY: 60.0,         // Vertical gravity force (m/s^2) for falling
  FRICTION: 2.0,                 // Base friction (for reference)
  FRICTION_DOWNHILL: 0.5,        // Very low - let momentum build downhill
  FRICTION_UPHILL: 3.5,          // Higher - struggle to recover uphill
  MIN_STALL_SPEED: 4.0,          // Speed at which control becomes sluggish
  MAX_DOWNHILL_SPEED: 200.0,     // Cap for gravity stacking (doubled for extreme snowball effect)
  SLOPE_SENSITIVITY: 2.5,        // Terrain angle affects physics (increased from 2.0)
  DOWNHILL_ACCEL_EXPONENT: 1.3,  // Non-linear "faster and faster" effect

  // Air Handling
  AIR_CONTROL: 0.3,        // Reduced steering while in air
  JUMP_ASSIST: 10.0,       // Slight pop when leaving ramps to feel less sticky

  // World Generation - Optimized
  TERRAIN_SCALE: 0.004,
  TERRAIN_HEIGHT: 14.0,    // Made taller for better cliffs
  CHUNK_SIZE: 100,
  RENDER_DISTANCE: 4,
  FOG_DIST: 380, // Kept for default initialization if needed, but Game will override
  WATER_LEVEL: -20.0,
  MAX_AIR_TIME: 3.0,
  SKIM_SPEED_THRESHOLD: 22.0,

  // Physics
  MAX_CLIMBABLE_SLOPE: 2.5,

  // Boost & EP
  BOOST_SPEED_MULTIPLIER: 7.2,
  MAX_EP: 100,
  EP_PER_APPLE: 30,
  EP_DRAIN_PER_SEC: 40.0, // Drains full bar in 2.5s

  // Apple Mechanics
  APPLE_ROT_TIME: 30.0,
  MAX_APPLES: 80,
  SPAWN_CHANCE: 0.90,
  APPLE_CULL_DIST: 450.0,
};

export enum GameState {
  MENU,
  PLAYING,
  GAME_OVER
}

export type Vector2 = { x: number; y: number };
