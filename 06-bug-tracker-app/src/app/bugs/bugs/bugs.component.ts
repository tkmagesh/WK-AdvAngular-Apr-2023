import { Component, OnInit } from '@angular/core';
import { Bug } from '../models/bug';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {

  bugs : Bug[] = []
  newBugName : string = ''

  ngOnInit(){
    this.bugs.push({ id : 1, name : "Server communication failure", isClosed : false, createdAt : new Date('10-Mar-2023')})
    this.bugs.push({ id: 2, name: "User actions not recognized", isClosed: true, createdAt: new Date('10-Apr-2023') })
    this.bugs.push({ id: 3, name: "Data integrity checks failed", isClosed: false, createdAt: new Date('10-May-2023') })
    this.bugs.push({ id: 4, name: "Application not responding", isClosed: true, createdAt: new Date('10-Jan-2023') })

    
  }

  getClosedCount() : number {
    console.log('getClosedCount triggered')
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
  }

  onAddNewClick(){
    const newBugId = this.bugs.reduce((result, bug) => result > bug.id ? result : bug.id, 0) + 1
    const newBug : Bug = {
      id : newBugId,
      name : this.newBugName,
      isClosed : false,
      createdAt : new Date()
    }
    //mutable
    // this.bugs.push(newBug)

    //immutable
    this.bugs = [...this.bugs, newBug]
  }

  onBugNameClick(bugToToggle: Bug) {
    //mutation
    // bugToToggle.isClosed = !bugToToggle.isClosed

    //immutability
    const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
    this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
  }
}
