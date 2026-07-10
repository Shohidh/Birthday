import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GardenPage from './pages/GardenPage';
export default function App() { return <Routes><Route path="/" element={<LoginPage />} /><Route path="/garden" element={<GardenPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes>; }
