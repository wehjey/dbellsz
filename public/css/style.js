import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Raleway', sans-serif'
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': ''Raleway', sans-serif'
  },
  'h5': {
    'color': '#999'
  },
  'logo': {
    'maxHeight': [{ 'unit': 'px', 'value': 70 }]
  },
  'logo-text': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'fontWeight': 'bold',
    'fontFamily': ''Montserrat', sans-serif',
    'paddingTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'navbar': {
    'position': 'relative',
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '0',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'navbar-default': {
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'navbar-default navbar-nav>li>a': {
    'textTransform': 'uppercase',
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#1b1818'
  },
  'navbar-default navbar-nav>li>a:hover': {
    'color': '#00649E',
    'background': 'transparent'
  },
  'navbar-default navbar-nav>li>a:focus': {
    'color': '#00649E',
    'background': 'transparent'
  },
  'navbar-default navbar-nav>active>a': {
    'color': '#00649E',
    'background': 'transparent'
  },
  'navbar-default navbar-nav>active>a:hover': {
    'color': '#00649E',
    'background': 'transparent'
  },
  'navbar-default navbar-nav>active>a:focus': {
    'color': '#00649E',
    'background': 'transparent'
  },
  'navbar-brand': {
    'color': '#fff !important'
  },
  'nav-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'wc-wrapper': {
    'backgroundImage': 'url('../images/IMG_8861.jpg')',
    'backgroundSize': 'cover',
    'height': [{ 'unit': 'px', 'value': 500 }],
    'color': 'white',
    'paddingTop': [{ 'unit': 'px', 'value': 150 }],
    'transition': 'background 1s ease'
  },
  'large-text': {
    'fontSize': [{ 'unit': 'px', 'value': 70 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.25 }],
    'fontWeight': 'bolder',
    'fontFamily': ''Roboto Slab', serif',
    'color': '#fff',
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'textShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 11 }, { 'unit': 'string', 'value': 'rgb(31, 31, 31)' }],
    'only all&&<w768': {
      'fontSize': [{ 'unit': 'px', 'value': 40 }]
    }
  },
  'small-text': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 11 }, { 'unit': 'string', 'value': 'rgb(31, 31, 31)' }]
  },
  'msg-btn-div': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 18 }]
  },
  'msg-btn': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'background': 'white',
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'transition': 'all 0.5'
  },
  'send-btn': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'background': 'white',
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'transition': 'all 0.5',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'more-btn': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'background': 'white',
    'color': '#333',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'transition': 'all 0.5'
  },
  'msg-btn:hover': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'background': 'transparent',
    'color': '#fff',
    'textDecoration': 'none'
  },
  'more-btn:hover': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'background': 'transparent',
    'color': '#fff',
    'textDecoration': 'none'
  },
  'sc-wrapper': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'abt-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'background': '#f2f2f2'
  },
  'section-title': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'section-title:after': {
    'content': '""',
    'background': '#00649E',
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'display': 'inline-block'
  },
  'serv img': {
    'maxHeight': [{ 'unit': 'px', 'value': 180 }]
  },
  'mini img': {
    'maxHeight': [{ 'unit': 'px', 'value': 200 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'img-text': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.1 }],
    'left': [{ 'unit': '%H', 'value': 0.1 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'color': 'white',
    'backgroundColor': 'rgba(39, 39, 39, 0.9)',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333' }],
    'borderRadius': '4px'
  },
  'parallax': {
    // The image used
    'backgroundImage': 'url("../images/bg.jpg")',
    // Set a specific height
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    // Create the parallax scrolling effect
    'backgroundAttachment': 'fixed',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'profile': {
    'height': [{ 'unit': 'px', 'value': 150 }]
  },
  'footer-wrapper': {
    'background': '#222',
    'fontFamily': ''Montserrat', sans-serif'
  },
  'footer-wrapper h2': {
    'color': '#fff'
  },
  'footer-wrapper h5': {
    'color': '#fff'
  },
  'footer-wrapper p': {
    'color': '#999'
  },
  'textbox': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': '#f2f2f2',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'bottom-bar': {
    'background': '#111',
    'color': '#999',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'paddingTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'social a': {
    'color': '#333'
  },
  'social a:hover': {
    'textDecoration': 'none'
  },
  '#scrollBtn': {
    'display': 'none',
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'right': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '99',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'backgroundColor': '#111',
    'color': 'white',
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '10px',
    'transition': 'all 0.5'
  },
  '#scrollBtn:hover': {
    'backgroundColor': '#555'
  },
  'f-nav>a': {
    'color': '#999',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'f-nav>a:active': {
    'color': '#999'
  },
  'f-nav>a:visited': {
    'color': '#999'
  }
});
