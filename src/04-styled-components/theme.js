// src/04-styled-components/theme.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html {
    background: ${({ theme }) => theme.bg};
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    transition: all 0.25s linear;
  }
`;

export const lightTheme = {
  bgHeader: '#FFFFFF',
  bg: '#F8FAFC',
  bgCard: '#FFFFFF',
  bgPromoBadge: '#93C5FD',
  text: '#0F172A',
  textDimmed: '#64748B',
  textAccent: '#FFFFFF',
  highlightDetails: '#1E40AF',
  main: '#1D4ED8',
  accent: '#FFFFFF',
  starColor: '#38BDF8',
  skeleton: '#E2E8F0',
  skeletonHighlight: '#F1F5F9',
  borderLine: '#E2E8F0',
  cardShadow: '0 0 15px 6px rgba(0, 0, 0, 0.06)',
};

export const darkTheme = {
  bgHeader: '#0B1220',
  bg: '#0F172A',
  bgCard: '#1E293B',
  bgPromoBadge: '#60A5FA',
  text: '#FFFFFF',
  textDimmed: '#CBD5E1',
  textAccent: '#FFFFFF',
  highlightDetails: '#93C5FD',
  main: '#1D4ED8',
  accent: '#FFFFFF',
  starColor: '#38BDF8',
  skeleton: '#334155',
  skeletonHighlight: '#475569',
  borderLine: '#1E293B',
  cardShadow: '0 0 15px 6px rgba(255, 255, 255, 0.06)',
};
