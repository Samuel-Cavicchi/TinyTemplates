import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { ResumeFormatModel } from '../models/resume-format.model';
import { Observable } from 'rxjs/Observable';
import { FirebaseAuthService } from './firebase-auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FirebaseDatabaseService {

  public emptyTemplateResume: ResumeFormatModel = {
    'ishidden': {
      'basics': true,
      'work': true,
      'volunteer': true,
      'education': true,
      'awards': true,
      'publications': true,
      'skills': true,
      'languages': true,
      'interests': true,
      'references': true
    },
    'basics': {
      'name': '',
      'label': '',
      'picture': '',
      'email': '',
      'phone': '',
      'website': '',
      'summary': '',
      'location': {
        'address': '',
        'postalCode': '',
        'city': '',
        'countryCode': '',
        'region': ''
      },
      'profiles': [
        {
          'network': '',
          'username': '',
          'url': ''
        }
      ]
    },
    'work': [
      {
        'company': '',
        'position': '',
        'website': '',
        'startDate': '',
        'endDate': '',
        'summary': '',
        'highlights': [
          ''
        ]
      }
    ],
    'volunteer': [
      {
        'organization': '',
        'position': '',
        'website': '',
        'startDate': '',
        'endDate': '',
        'summary': '',
        'highlights': [
          ''
        ]
      }
    ],
    'education': [
      {
        'institution': '',
        'area': '',
        'studyType': '',
        'startDate': '',
        'endDate': '',
        'gpa': '',
        'courses': [
          ''
        ]
      }
    ],
    'awards': [
      {
        'title': '',
        'date': '',
        'awarder': '',
        'summary': ''
      }
    ],
    'publications': [
      {
        'name': '',
        'publisher': '',
        'releaseDate': '',
        'website': '',
        'summary': ''
      }
    ],
    'skills': [
      {
        'name': '',
        'level': '',
        'keywords': [
          ''
        ]
      }
    ],
    'languages': [
      {
        'language': '',
        'fluency': ''
      }
    ],
    'interests': [
      {
        'name': '',
        'keywords': [
          '',
        ]
      }
    ],
    'references': [
      {
        'name': '',
        'reference': ''
      }
    ]
  };

  public templateResume: ResumeFormatModel = {
    'ishidden': {
      'basics': false,
      'work': false,
      'volunteer': false,
      'education': false,
      'awards': false,
      'publications': false,
      'skills': false,
      'languages': false,
      'interests': false,
      'references': false
    },
    'basics': {
      'name': 'Richard Hendriks',
      'label': 'Programmer',
      'picture': '',
      'email': 'richard.hendriks@gmail.com',
      'phone': '(912) 555-4321',
      'website': 'http://richardhendricks.com',
      'summary': 'Richard hails from Tulsa. He has earned degrees from the University of Oklahoma and Stanford. (Go Sooners and Cardinals!) Before starting Pied Piper, he worked for Hooli as a part time software developer. While his work focuses on applied information theory, mostly optimizing lossless compression schema of both the length-limited and adaptive variants, his non-work interests range widely, everything from quantum computing to chaos theory. He could tell you about it, but THAT would NOT be a “length-limited” conversation!',
      'location': {
        'address': '2712 Broadway St',
        'postalCode': 'CA 94115',
        'city': 'San Francisco',
        'countryCode': 'US',
        'region': 'California'
      },
      'profiles': [
        {
          'network': 'SoundCloud',
          'username': 'dandymusicnl',
          'url': 'https://soundcloud.com/dandymusicnl'
        }
      ]
    },
    'work': [
      {
        'company': 'Pied Piper',
        'position': 'CEO/President',
        'website': 'http://piedpiper.com',
        'startDate': '2013-12-01',
        'endDate': '2014-12-01',
        'summary': 'Pied Piper is a multi-platform technology based on a proprietary universal compression algorithm that has consistently fielded high Weisman Scores™ that are not merely competitive, but approach the theoretical limit of lossless compression.',
        'highlights': [
          'Build an algorithm for artist to detect if their music was violating copy right infringement laws',
          'Successfully won Techcrunch Disrupt',
          'Optimized an algorithm that holds the current world record for Weisman Scores'
        ]
      }
    ],
    'volunteer': [
      {
        'organization': 'CoderDojo',
        'position': 'Teacher',
        'website': 'http://coderdojo.com/',
        'startDate': '2012-01-01',
        'endDate': '2013-01-01',
        'summary': 'Global movement of free coding clubs for young people.',
        'highlights': [
          'Awarded Teacher of the Month'
        ]
      }
    ],
    'education': [
      {
        'institution': 'University of Oklahoma',
        'area': 'Information Technology',
        'studyType': 'Bachelor',
        'startDate': '2011-06-01',
        'endDate': '2014-01-01',
        'gpa': '4.0',
        'courses': [
          'DB1101 - Basic SQL',
          'CS2011 - Java Introduction'
        ]
      }
    ],
    'awards': [
      {
        'title': 'Digital Compression Pioneer Award',
        'date': '2014-11-01',
        'awarder': 'Techcrunch',
        'summary': 'There is no spoon.'
      }
    ],
    'publications': [
      {
        'name': 'Video compression for 3d media',
        'publisher': 'Hooli',
        'releaseDate': '2014-10-01',
        'website': 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)',
        'summary': 'Innovative middle-out compression algorithm that changes the way we store data.'
      }
    ],
    'skills': [
      {
        'name': 'Web Development',
        'level': 'Master',
        'keywords': [
          'HTML',
          'CSS',
          'Javascript'
        ]
      },
      // {
      //   'name': 'Compression',
      //   'level': 'Master',
      //   'keywords': [
      //     'Mpeg',
      //     'MP4',
      //     'GIF'
      //   ]
      // }
    ],
    'languages': [
      {
        'language': 'English',
        'fluency': 'Native speaker'
      }
    ],
    'interests': [
      {
        'name': 'Wildlife',
        'keywords': [
          'Ferrets',
          'Unicorns'
        ]
      }
    ],
    'references': [
      {
        'name': 'Erlich Bachman',
        'reference': 'It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company.'
      }
    ]
  };

  public resumeSub: BehaviorSubject<ResumeFormatModel[]> = new BehaviorSubject<ResumeFormatModel[]>(null);
  private resumes: Array<ResumeFormatModel>;
  private keys: Array<any>;
  private unsavedResume: ResumeFormatModel;

  public resumeRef: AngularFireList<any>;
  public autofill: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public db: AngularFireDatabase, public auth: FirebaseAuthService) {
    this.subscribeAuthstate();
    auth.afAuth.authState.subscribe(() => {
      if (auth.user) { // If they just signed in
        if (this.resumes != null) { // And a resume exists
          this.unsavedResume = this.resumes[0]; // Save their work
        }
      }
      this.subscribeAuthstate();
    });
  }

  subscribeAuthstate() {
    if (this.auth.user) {
      this.resumeRef = this.db.list('resumes/' + this.auth.user.uid);
    } else {
      console.log('Subscribing to public resume.');
      this.resumeRef = this.db.list('public-resumes');
    }
    this.resumeRef.snapshotChanges().subscribe(actions => {
      this.resumes = actions.map(c => ({ ...c.payload.val() }));
      this.keys = actions.map(c => (c.payload.key));
      if (this.resumes[0] == null) { // If there is no resume stored on this profile
        console.log('There is no resume stored on this profile.')
        if (this.unsavedResume != null) { // If there exists an unsaved resume
          this.resumes[0] = this.unsavedResume;
          this.addResume(this.unsavedResume);
        }else { // Else if they have not made any work and have no previously saved work
          this.resumes[0] = this.emptyTemplateResume;
          this.addResume(this.emptyTemplateResume); // Add a new empty resume to their profile
        }
      } else {
        if (this.unsavedResume != null) { // If they have previosly saved resumes and were editing an unsaved resume
          // Ask if they would like to save their unsaved work as a new resume
        }
      }
      this.resumeSub.next(this.resumes);
    });

  }
  isSavingResume() {
    if (this.auth.user) {
      return true;
    } else {
      return false;
    }
  }
  addResume(r: ResumeFormatModel) {
    this.resumeRef.push(r);
  }

  updateResume(i: number, r: ResumeFormatModel) {
    if (this.auth.user) {// If a user exists, update the database
      this.resumeRef.update(this.keys[i], r);
    }  // Otherwise don't update the public database
  }
}
