import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  spacing: 8,
  root: {
    width: 'fit-content',
    margin: 100,
    marginLeft: 150,
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
    color: 'white',
  },
  title: {
    marginTop: 20,
    marginBottom: 50,
  },
  songs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    width: 500,
    background: 'rgba(0, 0, 0, 0.5)',
    marginTop: 20,
    marginLeft: 150,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
}));

