export const getTeamLogo = (type) => {
    switch (type) {
        case 'mobile':
            return require('../assets/image/mobileIcon.png')
            break;
        case 'everyone':
            return require('../assets/image/podo_9s.png')
            break;
        default: return require('../assets/image/mobileIcon.png')
    }
}
