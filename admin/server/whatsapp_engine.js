let settings={enabled:false,connected:false,phone:'',sessionName:'Shakil Ecom local preview'};
export function getWhatsAppSettings(){return {...settings};}
export function saveWhatsAppSettings(next){settings={...settings,...next,enabled:false};return {...settings};}
export async function sendWhatsAppNotification(){return {ok:false,error:'WhatsApp integration is disabled in local preview.'};}
export function formatWhatsAppMessage(){return '';}
