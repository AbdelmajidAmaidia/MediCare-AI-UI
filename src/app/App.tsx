import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Toolbar,
} from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PatientDashboard from "./components/patient/PatientDashboard";
import PatientDashboardV2 from "./components/patient/PatientDashboardV2";
import AppointmentBooking from "./components/patient/AppointmentBooking";
import AppointmentBookingWizard from "./components/patient/AppointmentBookingWizard";
import MedicalRecords from "./components/patient/MedicalRecords";
import AIChatInterface from "./components/patient/AIChatInterface";
import BillingHistory from "./components/patient/BillingHistory";
import PharmacyOrdersHistory from "./components/patient/PharmacyOrdersHistory";
import PrescriptionFlow from "./components/patient/PrescriptionFlow";
import DoctorDashboard from "./components/doctor/DoctorDashboard";
import PatientList from "./components/doctor/PatientList";
import ConsultationInterface from "./components/doctor/ConsultationInterface";
import DoctorScheduler from "./components/doctor/DoctorScheduler";
import AIDiagnosticSupport from "./components/doctor/AIDiagnosticSupport";
import RadiologyWorkstation from "./components/doctor/RadiologyWorkstation";
import LabDashboard from "./components/lab/LabDashboard";
import LabResultEntry from "./components/lab/LabResultEntry";
import LabTechnicianPortal from "./components/lab/LabTechnicianPortal";
import PharmacyDashboard from "./components/pharmacy/PharmacyDashboard";
import DeliveryManagement from "./components/pharmacy/DeliveryManagement";
import PharmacyWallet from "./components/pharmacy/PharmacyWallet";
import LabPayroll from "./components/lab/LabPayroll";
import DoctorFinancialSuite from "./components/doctor/DoctorFinancialSuite";
import EnhancedPricing from "./components/landing/EnhancedPricing";
import AdminDashboard from "./components/admin/AdminDashboard";
import SuperAdminOverview from "./components/admin/SuperAdminOverview";
import DoctorVerificationDetail from "./components/admin/DoctorVerificationDetail";
import DoctorVerification from "./components/admin/DoctorVerification";
import FinancialAdminPanel from "./components/admin/FinancialAdminPanel";
import UserManagementTable from "./components/admin/UserManagementTable";
import PayrollManagement from "./components/admin/PayrollManagement";
import AdminSettings from "./components/admin/AdminSettings";
import SuperAdminMasterDashboard from "./components/admin/SuperAdminMasterDashboard";
import LabResultLocked from "./components/patient/LabResultLocked";
import LandingPage from "./components/landing/LandingPage";
import AboutPage from "./components/landing/AboutPage";
import AboutPageV2 from "./components/landing/AboutPageV2";
import ServicesPage from "./components/landing/ServicesPage";
import AuthPage from "./components/landing/AuthPage";
import Navbar from "./components/landing/Navbar";
import Footer from "./components/landing/Footer";
import HeroSectionV2 from "./components/landing/HeroSectionV2";
import TrustBar from "./components/landing/TrustBar";
import FeaturesSection from "./components/landing/FeaturesSection";
import ProcessSection from "./components/landing/ProcessSection";
import TrustCommunitySection from "./components/landing/TrustCommunitySection";
import CTAStrip from "./components/landing/CTAStrip";
import FuturisticHome from "./components/landing/FuturisticHome";
import ModernAbout from "./components/landing/ModernAbout";
import ServicesZigZag from "./components/landing/ServicesZigZag";
import BlogPostDetail from "./components/landing/BlogPostDetail";
import BrandGuidelines from "./components/brand/BrandGuidelines";

type ViewMode = "landing" | "dashboard";

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("landing");
  const [landingPage, setLandingPage] = useState("home");
  const [userRole, setUserRole] = useState<
    "patient" | "doctor" | "lab" | "pharmacy" | "admin"
  >("patient");
  const [currentPage, setCurrentPage] =
    useState("patient-home");

  const userName = "Sarah Martinez";

  const handleLandingNavigation = (page: string) => {
    if (page === "login") {
      setLandingPage("login");
    } else if (page === "about") {
      setLandingPage("about");
    } else if (page === "services") {
      setLandingPage("services");
    } else if (page === "blog") {
      setLandingPage("blog");
    } else if (page === "brand-guidelines") {
      setLandingPage("brand-guidelines");
    } else {
      setLandingPage("home");
    }
  };

  const handleLogin = () => {
    setViewMode("dashboard");
    setCurrentPage("patient-home");
    setUserRole("patient");
  };

  const handleGetStarted = () => {
    setViewMode("dashboard");
    setCurrentPage("patient-appointments");
    setUserRole("patient");
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleRoleChange = (
    role: "patient" | "doctor" | "lab" | "pharmacy" | "admin",
  ) => {
    setUserRole(role);
    // Reset to appropriate home page for each role
    const homePages = {
      patient: "patient-home",
      doctor: "doctor-dashboard",
      lab: "lab-dashboard",
      pharmacy: "pharmacy-dashboard",
      admin: "admin-dashboard",
    };
    setCurrentPage(homePages[role]);
  };

  const renderContent = () => {
    // Patient Pages
    if (currentPage === "patient-home") {
      return (
        <PatientDashboardV2
          patientName={userName.split(" ")[0]}
          onOpenChat={() => setCurrentPage("patient-ai")}
          onJoinVideo={() => alert("Joining video call...")}
          onBookAppointment={() =>
            setCurrentPage("patient-appointments")
          }
        />
      );
    }
    if (currentPage === "patient-appointments") {
      return <AppointmentBookingWizard />;
    }
    if (currentPage === "patient-records") {
      return <MedicalRecords />;
    }
    if (currentPage === "patient-ai") {
      return <AIChatInterface />;
    }
    if (currentPage === "patient-billing") {
      return <BillingHistory />;
    }
    if (currentPage === "patient-subscription") {
      return <EnhancedPricing />;
    }
    if (currentPage === "patient-pharmacy") {
      return <PharmacyOrdersHistory />;
    }
    if (currentPage === "patient-prescriptions") {
      return <PrescriptionFlow />;
    }
    if (currentPage === "patient-locked-result") {
      return <LabResultLocked />;
    }

    // Doctor Pages
    if (currentPage === "doctor-dashboard") {
      return <DoctorDashboard />;
    }
    if (currentPage === "doctor-patients") {
      return <PatientList />;
    }
    if (currentPage === "doctor-appointments") {
      return <DoctorScheduler />;
    }
    if (currentPage === "doctor-consultations") {
      return <ConsultationInterface />;
    }
    if (currentPage === "doctor-ai") {
      return <RadiologyWorkstation />;
    }
    if (currentPage === "doctor-wallet") {
      return <DoctorFinancialSuite />;
    }

    // Lab Pages
    if (
      currentPage === "lab-dashboard" ||
      currentPage === "lab-requests"
    ) {
      return <LabTechnicianPortal />;
    }
    if (currentPage === "lab-results") {
      return <LabResultEntry />;
    }
    if (currentPage === "lab-payroll") {
      return <LabPayroll />;
    }

    // Pharmacy Pages
    if (
      currentPage === "pharmacy-dashboard" ||
      currentPage === "pharmacy-orders"
    ) {
      return <PharmacyDashboard />;
    }
    if (currentPage === "pharmacy-delivery") {
      return <DeliveryManagement />;
    }
    if (currentPage === "pharmacy-wallet") {
      return <PharmacyWallet />;
    }

    // Admin Pages
    if (currentPage === "admin-dashboard") {
      return <SuperAdminOverview />;
    }
    if (currentPage === "admin-verification-detail") {
      return <DoctorVerificationDetail />;
    }
    if (currentPage === "admin-users") {
      return <UserManagementTable />;
    }
    if (currentPage === "admin-verifications") {
      return <DoctorVerification />;
    }
    if (currentPage === "admin-financials") {
      return <FinancialAdminPanel />;
    }
    if (currentPage === "admin-payroll") {
      return <PayrollManagement />;
    }
    if (currentPage === "admin-settings") {
      return <AdminSettings />;
    }

    // Placeholder for other pages
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <h2>Page: {currentPage}</h2>
        <p>
          This section will be implemented in the next steps
        </p>
      </Box>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Landing/Marketing Pages */}
      {viewMode === "landing" && (
        <Box>
          {landingPage === "home" && (
            <Box>
              <Navbar
                onNavigate={handleLandingNavigation}
                darkMode={true}
              />
              <FuturisticHome onGetStarted={handleGetStarted} />
              <Footer onNavigate={handleLandingNavigation} />
            </Box>
          )}
          {landingPage === "about" && (
            <Box>
              <Navbar onNavigate={handleLandingNavigation} />
              <ModernAbout />
              <Footer onNavigate={handleLandingNavigation} />
            </Box>
          )}
          {landingPage === "services" && (
            <Box>
              <Navbar onNavigate={handleLandingNavigation} />
              <ServicesZigZag />
              <Footer onNavigate={handleLandingNavigation} />
            </Box>
          )}
          {landingPage === "blog" && (
            <Box>
              <Navbar
                onNavigate={handleLandingNavigation}
                darkMode={true}
              />
              <BlogPostDetail />
              <Footer onNavigate={handleLandingNavigation} />
            </Box>
          )}
          {landingPage === "brand-guidelines" && (
            <Box>
              <Navbar
                onNavigate={handleLandingNavigation}
                darkMode={false}
              />
              <BrandGuidelines />
              <Footer onNavigate={handleLandingNavigation} />
            </Box>
          )}
          {landingPage === "login" && (
            <AuthPage onLogin={handleLogin} />
          )}
        </Box>
      )}

      {/* Dashboard View */}
      {viewMode === "dashboard" &&
        (currentPage === "lab-dashboard" ? (
          <LabDashboard />
        ) : (
          <Box
            sx={{
              display: "flex",
              minHeight: "100vh",
              bgcolor: "background.default",
            }}
          >
            <Header
              userRole={userRole}
              userName={userName}
              onRoleChange={handleRoleChange}
            />
            <Sidebar
              userRole={userRole}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />
              <Box sx={{ maxWidth: 1400, mx: "auto", mt: 2 }}>
                {renderContent()}
              </Box>
            </Box>
          </Box>
        ))}
    </ThemeProvider>
  );
}