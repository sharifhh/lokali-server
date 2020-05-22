export const LOGIN_TYPE = 'login'
export const SIGNUP_TYPE = 'signup'

export const FORM_LOGIN_TITLE = 'Lokali Profile Login'
export const FORM_SIGNUP_TITLE = 'Create New Lokali Account'

export const FORM_LOGIN_SUBTITLE = 'Enter your email and password'
export const FORM_SIGNUP_SUBTITLE = 'It\'s easy and fun'

export const FORM_LOGIN_INFO = {
    type:LOGIN_TYPE,
    title:FORM_LOGIN_TITLE,
    subtitle:FORM_LOGIN_SUBTITLE
}
export const FORM_SIGNUP_INFO = {
    type:SIGNUP_TYPE,
    title:FORM_SIGNUP_TITLE,
    subtitle:FORM_SIGNUP_SUBTITLE
}

export const ALL_FIELDS_REQUIRED_ERR = 'All Fields are required'
export const WRONG_INFO_ERR = 'Email/Password are incorrect, Please try again'
export const USER_EXISTS_ERR = 'User Exists'
export const USER_EXISTS_ERR_CODE = 11000
export const PASSWORD_DONT_MATCH_ERR = 'Password dont match'

export const LOGGED_USER_KEY = 'LOGGED_USER'

export const DEVELOPMENT_HOST = 'http://localhost:4000'
export const MONTH_LIST = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

export const  NUM_DAY_IN_MONTH= Array.from({length:31}, (v,k) => k+1);
    
export const GENDER_OPTIONS = ['Male', 'Female', 'Other','Rather not say']      
export const ACTIVATION_ROUTE = '/activate'      



export const SKILL_OPTIONS = ['Communication',
'Team work',
'Negotiation',
'Persuasion',
'Problem Solving',
'Leadership',
'Organisation',
'Motivation',
'Work Under Pressure',
'Confidence',
'Management Skills',
'Resilience',
'Analytical',
'Entrepreneur',
'Technical',
'Helper',
'Healer',
'Facilitator',
'Handyman',
'Culinary']


export const HOBBY_OPTIONS = [
    'Reading',
    'Family' ,
    'Community' ,
    'Movies',
    'Sport',
    'Computer' ,
    'Gardening',
    'Walking',
    'Exercise',
    'Music',
    'Entertaining',
    'Travel',
    'Socializing',
    'Yoga',
    'Arts and Crafts',
    'Hiking' ,
    'Cooking',
    'Camping',
    'Automotive',
    'Animal Care Volunteer Work',
    'Dancing'
    ]