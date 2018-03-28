export default {
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  timeWrapper: {
    alignItems: 'flex-end',
    flex: 1,
  },
  time: {
    textAlign: 'right',
    color: '#858585',
  },
  details: {
    borderRightWidth: 0,
    marginLeft: 20,
    paddingLeft: 25,
    paddingRight: 20,
    borderLeftWidth: 2,
    flexDirection: 'column',
    flex: 1,
  },
  defaultDetail: {
    borderColor: '#3c2b3e',
  },
  lastDetail: {
    borderColor: 'rgba(0,0,0,0)',
  },
  separator: {
    height: 1,
    backgroundColor: '#aaa',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  detail: {
    paddingTop: 4,
    paddingBottom: 10,
  },
  description: {
    marginTop: 10,
  },
  price: {
    fontSize: 18,
  },
  circle: {
    borderRadius: 10,
    position: 'absolute',
    left: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
};
