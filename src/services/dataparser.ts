//src/services/dataparser

import { Tool, Specialty, Trait } from '../types/characterTypes';

const apiUrl = '/data/tools.json'; // Update this path according to where your JSON file is served

// Utility function to fetch JSON data from the public directory
async function fetchJsonData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return response.json();
}

// Fetch tools from a JSON file
export async function fetchTools(): Promise<{ tools: Tool[] }> {
  try {
    return await fetchJsonData<{ tools: Tool[] }>(apiUrl);
  } catch (error) {
    console.error('Error fetching tools:', error);
    throw error;
  }
}

// Fetch specialties from a JSON file (ensure specialties.json is similarly updated)
export async function fetchSpecialties(): Promise<{ specialties: Specialty[] }> {
  const filePath = '/data/specialties.json';
  try {
    return await fetchJsonData<{ specialties: Specialty[] }>(filePath);
  } catch (error) {
    console.error('Error fetching specialties:', error);
    throw error;
  }
}

// Fetch traits from a JSON file (ensure traits.json is similarly updated)
export async function fetchTraits(): Promise<{ traits: Trait[] }> {
  const filePath = '/data/traits.json';
  try {
    return await fetchJsonData<{ traits: Trait[] }>(filePath);
  } catch (error) {
    console.error('Error fetching traits:', error);
    throw error;
  }
}

// Fetch flavor texts from tools.json (already included)
export async function fetchFlavourTexts(): Promise<{ [key: string]: string }> {
  // Extract the flavor texts from tools data
  const toolsData = await fetchTools();
  const flavorTexts: { [key: string]: string } = {};
  toolsData.tools.forEach(tool => {
    flavorTexts[tool.name] = tool.flavorText;
  });
  return flavorTexts;
}