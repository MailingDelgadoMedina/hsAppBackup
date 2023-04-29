import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import {ThemeProvider} from "@aws-amplify/ui-react";
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import studioTheme from './ui-components/studioTheme';

Amplify.configure(awsconfig);