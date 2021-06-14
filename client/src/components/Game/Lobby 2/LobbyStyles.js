import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  spacing: 8,
  root: {
    // width: 'fit-content',
    // margin: 100,
    // marginLeft: 150,
    display: 'flex',
  },
  cover: {
    height: 500,
    width: 500,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  card: {
    display: 'flex',
    marginTop: 100,
    marginLeft: 50,
  },
  listDetails: {
    display: 'flex',
    justifyContent: 'center',
  },
  img_playOption: {
    marginTop: 30,
    display: 'flex',
  },
  options: {
    marginTop: 120,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 150,
    background: 'rgba(0, 0, 0, 0.5)',
    width: 500,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    marginTop: 20,
    marginBottom: 50,
  },
  songs: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 150,
    background: 'rgba(0, 0, 0, 0.5)',
    width: 500,
    height: 50,
    borderRadius: 10,
    paddingLeft: 80,
  },
  players: {
		marginTop: 50,
		display:'flex',
		flexDirection:'column',
		justifyContent: 'space-around',
    alignItems: 'start',
    marginLeft: 150,
    background: 'rgba(0, 0, 0, 0.5)',
    width: 500,
    height: 150,
    borderRadius: 10,
    paddingLeft: 80,
  },
  changeName: {
    //position: 'relative',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'start',
    marginLeft: 150,
    background: 'rgba(0, 0, 0, 0.5)',
    width: 500,
    height: 150,
    borderRadius: 10,
    paddingLeft: 80,
  },
  dropdown: {
    color: '#fff',
    marginLeft: 160,
  },
  codeBtn: {
    color: '#ff96ad',
    background: 'rgba(189, 195, 199, .8)',
    height: 60,
    width: 150,
    borderRadius: 20,
  },
  btnControl: {
    marginTop: 50,
    marginLeft: 100,
    display: 'center',
    marginBottom: 100,
  },

}));