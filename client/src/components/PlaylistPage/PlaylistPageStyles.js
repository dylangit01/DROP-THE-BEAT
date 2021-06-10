import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    margin: 100,
    marginLeft: 150,
  },
  cover: {
    height: 500,
    width: 500,
    backgroundColor: 'transparent',
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
    marginTop: 80,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 150,
    background: 'rgba(0, 0, 0, 0.5)',
    height: 200,
    width: 500,
    borderRadius: 10,
    padding: 20
  },
  difficulty: {

  }
}))

