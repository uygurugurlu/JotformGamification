export const getTeamLogo = (type) => {
    switch (type) {
        case 'mobile':
            return require('../assets/image/mobileIcon.png')
        default: return require('../assets/image/mobileIcon.png')
    }
}
