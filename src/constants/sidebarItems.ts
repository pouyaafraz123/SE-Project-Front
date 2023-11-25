import { path } from '@/routes/path'
import { ISidebarItems } from '@/components/organisms/sidebar'
import { IRole } from '@/interfaces'

export const sidebarItems: { [key in IRole]: ISidebarItems[] } = {
  'super-admin': [
    {
      iconName: 'home',
      name: 'dashboard',
      items: { path: '/' }
    },
    {
      iconName: 'hospital',
      name: 'healthcareFacility',
      items: { path: path.hf.hfList.link() }
    },
    // {
    //   iconName: 'monitor',
    //   items: {
    //     name: 'robotManagement.title',
    //     child: [
    //       {
    //         name: 'robotManagement.registerRobot',
    //         path: '3'
    //       },
    //       {
    //         name: 'robotManagement.registerDevice',
    //         path: '4'
    //       },
    //       {
    //         name: 'robotManagement.createRobot',
    //         path: '5'
    //       }
    //     ]
    //   }
    // },
    // {
    //   iconName: 'check-square',
    //   items: {
    //     name: 'assignRobot.title',
    //     child: [
    //       {
    //         name: 'assignRobot.assignToHF',
    //         path: '6'
    //       },
    //       {
    //         name: 'assignRobot.assignToDoctor',
    //         path: '7'
    //       }
    //     ]
    //   }
    // },
    {
      iconName: 'users-group-rounded',
      name: 'userManagement.title',
      items: {
        child: [
          {
            name: 'userManagement.users',
            path: path.users.users.link()
          },
          {
            name: 'userManagement.localAdmins',
            path: path.users.localAdmin.link()
          },
          {
            name: 'userManagement.doctors',
            path: path.users.doctor.link()
          },
          {
            name: 'userManagement.staffs',
            path: path.users.staff.link()
          },
          {
            name: 'userManagement.patients',
            path: path.users.patient.link()
          }
        ]
      }
    },
    {
      iconName: 'dollar-minimalistic',
      name: 'financialManagement.title',
      items: {
        child: [
          {
            name: 'financialManagement.ruleDefinition',
            path: path.financial.list.link()
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
            path: path.financial.wallet.link()
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
      name: 'AppointmentManagement.title',
      items: {
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
      name: 'reportGeneration.title',
      items: {
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
  ],
  'local-admin': [],
  cmo: [],
  doctor: [],
  patient: [],
  staff: []
}
