import { ISidebarItems } from '@/components/organisms/sidebar'

export const superAdminItems: ISidebarItems[] = [
  {
    iconName: 'home',
    items: { name: 'dashboard', path: '1' }
  },
  {
    iconName: 'hospital',
    items: { name: 'healthcareFacility', path: '2' }
  },
  {
    iconName: 'monitor',
    items: {
      name: 'robotManagement.title',
      child: [
        {
          name: 'robotManagement.registerRobot',
          path: '3'
        },
        {
          name: 'robotManagement.registerDevice',
          path: '4'
        },
        {
          name: 'robotManagement.createRobot',
          path: '5'
        }
      ]
    }
  },
  {
    iconName: 'check-square',
    items: {
      name: 'assignRobot.title',
      child: [
        {
          name: 'assignRobot.assignToHF',
          path: '6'
        },
        {
          name: 'assignRobot.assignToDoctor',
          path: '7'
        }
      ]
    }
  },
  {
    iconName: 'users-group-rounded',
    items: {
      name: 'userManagement.title',
      child: [
        {
          name: 'userManagement.users',
          path: '8'
        },
        {
          name: 'userManagement.localAdmins',
          path: '9'
        },
        {
          name: 'userManagement.doctors',
          path: '10'
        },
        {
          name: 'userManagement.staffs',
          path: '11'
        },
        {
          name: 'userManagement.patients',
          path: '12'
        }
      ]
    }
  },
  {
    iconName: 'dollar-minimalistic',
    items: {
      name: 'financialManagement.title',
      child: [
        {
          name: 'financialManagement.ruleDefinition',
          path: '13'
        },
        {
          name: 'financialManagement.paymentMethod',
          path: '14'
        },
        {
          name: 'financialManagement.accountingReport',
          path: '15'
        },
        {
          name: 'financialManagement.patientWallet',
          path: '16'
        },
        {
          name: 'financialManagement.createAds',
          path: '17'
        }
      ]
    }
  },
  {
    iconName: 'monitor-camera',
    items: {
      name: 'AppointmentManagement.title',
      child: [
        {
          name: 'AppointmentManagement.appointmentTimesList',
          path: '18'
        },
        {
          name: 'AppointmentManagement.pastVisitSummaryNotes',
          path: '19'
        }
      ]
    }
  },
  {
    iconName: 'monitor-camera',
    items: {
      name: 'reportGeneration.title',
      child: [
        {
          name: 'reportGeneration.user',
          path: '20'
        },
        {
          name: 'reportGeneration.robotUsage',
          path: '21'
        },
        {
          name: 'reportGeneration.appointments',
          path: '22'
        },
        {
          name: 'reportGeneration.financial',
          path: '23'
        }
      ]
    }
  }
]
