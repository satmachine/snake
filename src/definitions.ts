

import * as THREE from 'three';

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
  GRAVITY_ACCEL: 30.0,     // Speed gain/loss on slopes
  PHYSICS_GRAVITY: 60.0,   // Vertical gravity force (m/s^2) for falling
  FRICTION: 2.0,           // Natural drag
  MIN_STALL_SPEED: 4.0,    // Speed at which control becomes sluggish
  MAX_DOWNHILL_SPEED: 80.0,// Cap for gravity stacking
  SLOPE_SENSITIVITY: 2.0,  // Terrain angle affects physics

  // Air Handling
  AIR_CONTROL: 0.3,        // Reduced steering while in air
  JUMP_ASSIST: 10.0,       // Slight pop when leaving ramps to feel less sticky

  // World Generation - Optimized
  TERRAIN_SCALE: 0.004, 
  TERRAIN_HEIGHT: 14.0,    // Made taller for better cliffs
  CHUNK_SIZE: 100,      
  RENDER_DISTANCE: 3,   
  FOG_DIST: 180,        
  WATER_LEVEL: -10.0,   
  
  // Physics
  MAX_CLIMBABLE_SLOPE: 2.5, 

  // Boost & EP
  BOOST_SPEED_MULTIPLIER: 1.8, 
  BOOST_DURATION: 1.5, 
  MAX_EP: 100,
  EP_PER_APPLE: 30,
  EP_COST_BOOST: 30,

  // Apple Mechanics
  APPLE_ROT_TIME: 30.0,
  MAX_APPLES: 80, 
  SPAWN_CHANCE: 0.90, 
  APPLE_CULL_DIST: 350.0, 
  
  // DREAMSCAPE PALETTE
  COLORS: {
    SNAKE_HEAD: 0x00E5FF,   
    SNAKE_BODY: 0x00B8D4, 
    SNAKE_EMISSIVE: 0x00E5FF,

    APPLE: 0xFF69B4,        
    APPLE_EMISSIVE: 0xFF1493,
    
    GROUND_BASE: 0xFFE0B2,  
    GROUND_HIGH: 0xFFCCBC,  
    GROUND_LOW: 0xE1BEE7,   

    OBSTACLE_DARK: 0x263238, 
    OBSTACLE_LIGHT: 0x455A64, 
    CRYSTAL: 0xB39DDB,      

    SKY_TOP: 0x4A148C,      
    SKY_BOTTOM: 0xFFCCBC,   
    FOG: 0xFFCCBC,
    
    UI_ACCENT: 0x00E5FF
  }
};

export enum GameState {
  MENU,
  PLAYING,
  GAME_OVER
}

export type Vector2 = { x: number; y: number };
