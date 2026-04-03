import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
// 1. අලුතින් හදපු project.js එක import කරගන්න
import project from './project' 

export const schemaTypes = [
  project, // 2. මෙතනට project එක ඇතුළත් කළා
  post, 
  author, 
  category, 
  blockContent
]