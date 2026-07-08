/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuCourse {
  courseName: string;
  dishName: string;
  description: string;
}

export interface CuratedMenu {
  title: string;
  courses: MenuCourse[];
}

export interface LuxuryPackage {
  pricePerPax: number;
  minPax: number;
  maxPaxCount: number;
  menuTitle: string;
  menuCourses: MenuCourse[];
  attireGownsCount: number;
  attireTuxedosCount: number;
  attireBridalHouse: string;
  attireDetails: string[];
  decorHighlights: string[];
  photographyHours: number;
  photographyDetails: string[];
}

export interface Venue {
  id: string;
  name: string;
  regionId: string;
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  vibe: string;
  fixedPackage: LuxuryPackage;
}

export interface Region {
  id: string;
  name: string;
  alternateName?: string;
  description: string;
  markerX: number; // Percentages for interactive map positioning
  markerY: number;
  mapPath?: string; // If we highlight standard SVG boundaries
  venues: Venue[];
}

export interface InquiryForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  preferredDate: string;
  estimatedGuests: number;
  specialRequests: string;
}
